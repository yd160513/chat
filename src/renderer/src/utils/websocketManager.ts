import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { io, Socket } from 'socket.io-client'
import {
  socketConnected,
  socketDisconnected,
  socketError,
  messageReceived,
  notificationReceived,
  usersUpdated
} from '../store/websocket'

// 创建一个 socket 管理器来处理 socket 实例
class WebsocketManager {
  private socket: Socket | null = null
  private listeners: Array<() => void> = []

  public connect(dispatch: any) {
    if (this.socket) {
      return this.socket
    }

    this.socket = io('http://localhost:3000', {
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    })

    // 连接成功事件
    this.socket.on('connect', () => {
      console.log('socket.io connected')
      dispatch(socketConnected())
    })

    // 接收消息事件
    this.socket.on('message', (message) => {
      console.log('socket.io message', message)
      dispatch(messageReceived(message))
    })

    // 接收通知事件
    this.socket.on('notification', (notification) => {
      console.log('socket.io notification', notification)
      dispatch(notificationReceived(notification))
    })

    // 用户列表更新
    this.socket.on('users-updated', (users) => {
      console.log('socket.io users-updated', users)
      dispatch(usersUpdated(users))
    })

    // 连接错误
    this.socket.on('connect_error', (error) => {
      console.error('Socket.IO connection error:', error)
      dispatch(socketError(error.message))
    })

    // 断开连接事件
    this.socket.on('disconnect', (reason) => {
      console.log('Socket.IO disconnected:', reason)
      dispatch(socketDisconnected(reason))
    })

    // 其他错误
    this.socket.on('error', (reason) => {
      console.error('Socket.IO error:', reason)
    })

    return this.socket
  }

  public disconnect() {
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }
  }

  public getSocket(): Socket | null {
    return this.socket
  }

  public sendMessage(message: any) {
    if (this.socket && this.socket.connected) {
      console.log('socket.io sendMessage', message)
      this.socket.emit('sendMessage', message)
    }
  }
}

// 导出 socket 管理器实例
export const socketManager = new WebsocketManager()

// 异步 chunk 初始化 websocket
export const initWebsocket = createAsyncThunk('websocket/init', async (_, { dispatch }) => {
  socketManager.connect(dispatch)
  // 不返回 socket 实例，避免不可序列化值被包含在 action 中
  return { timestamp: Date.now() } // 或者返回任何可序列化的值
})

const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    isConnected: false,
    isLoading: false,
    messages: [],
    notifications: [],
    users: [],
    error: null
  },
  reducers: {
    socketConnected: (state) => {
      state.isConnected = true
      state.isLoading = false
      state.error = null
    },
    socketDisconnected: (state, action) => {
      state.isConnected = false
      state.error = action.payload
    },
    socketError: (state, action) => {
      state.error = action.payload
    },
    messageReceived: (state, action) => {
      state.messages.push(action.payload)
    },
    notificationReceived: (state, action) => {
      state.notifications.push(action.payload)
    },
    usersUpdated: (state, action) => {
      state.users = action.payload
    },
    sendMessage: (state, action) => {
      socketManager.sendMessage(action.payload)
    },
    clearMessage: (state) => {
      state.messages = []
    },
    clearNotification: (state) => {
      state.notifications = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(initWebsocket.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(initWebsocket.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(initWebsocket.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const {
  socketConnected,
  socketDisconnected,
  socketError,
  messageReceived,
  notificationReceived,
  usersUpdated,
  sendMessage,
  clearMessage,
  clearNotification
} = socketSlice.actions

export default socketSlice.reducer
