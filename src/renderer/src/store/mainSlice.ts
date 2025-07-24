import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    isOpenConversationInfo: false,
    currentConversationId: -1,
  },
  reducers: {
    setIsOpenConversationInfo: (state, action) => {
      state.isOpenConversationInfo = action.payload
    },
    setCurrentConversationId: (state, action) => {
      state.currentConversationId = action.payload
    }
  }
})

export const openConversationInfo = (state: any) => state.main.isOpenConversationInfo
export const currentConversationId = (state: any) => state.main.currentConversationId
export const { setIsOpenConversationInfo, setCurrentConversationId } = mainSlice.actions

export default mainSlice.reducer
