import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    isOpenConversationInfo: false,
    currentConversationId: -1,
    isAuthenticated: false,
    currentUser: null
  },
  reducers: {
    setIsOpenConversationInfo: (state, action) => {
      state.isOpenConversationInfo = action.payload
    },
    setCurrentConversationId: (state, action) => {
      state.currentConversationId = action.payload
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated
      state.currentUser = action.payload.user || null
    }
  }
})

export const openConversationInfo = (state: any) => state.main.isOpenConversationInfo
export const currentConversationId = (state: any) => state.main.currentConversationId
export const isAuthenticated = (state: any) => state.main.isAuthenticated
export const currentUser = (state: any) => state.main.currentUser
export const { setIsOpenConversationInfo, setCurrentConversationId, setAuthenticated } = mainSlice.actions

export default mainSlice.reducer
