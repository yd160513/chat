import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    value: 111
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  }
})

export const selectValue = (state: any) => state.main.value

export default mainSlice.reducer;
