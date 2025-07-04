import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '@renderer/store/mainSlice'

export default configureStore({
  reducer: {
    main: mainReducer,
  }
})
