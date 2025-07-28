import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '@renderer/store/mainSlice'
import socketReducer from '@renderer/utils/websocketManager'

export default configureStore({
  reducer: {
    main: mainReducer,
    socket: socketReducer
  }
})
