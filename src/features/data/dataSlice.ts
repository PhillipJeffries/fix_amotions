import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ItemType {
  id?: number
  name: string
  value: number
  time?: number
  message: {fieldOne: string, fieldTwo: string, fieldThree: string, fieldFour: string}
  messageState?: boolean
}

// export interface DataState ItemType[]

const data = localStorage.data ? JSON.parse(localStorage.data) : []

const initialState: { data: ItemType[] } = { data: data }

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const index = state.data.findIndex((note) => note.id === action.payload);
      state.data[index].messageState = true
    },
    addNote: (state, action: PayloadAction<ItemType>) => {
      //   state.push(action.payload)
      const time = Date.now()
      const newEmotionMessage = {
        id: time,
        name: action.payload.name,
        value: action.payload.value,
        time: time,
        message: action.payload.message
      }
      state.data = [...state.data, newEmotionMessage]
      localStorage.data = JSON.stringify(state.data)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMessage, addNote } = dataSlice.actions

export default dataSlice.reducer