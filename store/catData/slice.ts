import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchCatFact, fetchCatImage } from './thunk'
import { CatImageType } from '../../types/entities'

export interface CatDataState {
  fact: string
  image: CatImageType
}

export const initialCatImage = {
  width: 0,
  height: 0,
  url: '',
  id: '',
  breeds: [],
}

const initialState: CatDataState = {
  fact: '',
  image: initialCatImage,
}

export const catDataSlice = createSlice({
  name: 'catData',
  initialState,
  reducers: {
    updateCatFact: (state, action: PayloadAction<string>) => {
      state.fact = action.payload
    },
    updateCatImage: (state, action: PayloadAction<CatImageType>) => {
      state.image = { ...action.payload }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCatFact.fulfilled, (state, { payload }) => {
      state.fact = payload.fact
    })
    builder.addCase(fetchCatImage.pending, (state, { payload }) => {
      state.image.url = 'https://c.tenor.com/4ENYQnaNI9QAAAAC/cat-wait.gif'
    })
    builder.addCase(fetchCatImage.fulfilled, (state, { payload }) => {
      state.image = { ...payload }
    })
  },
})

// Action creators are generated for each case reducer function
export const { updateCatFact, updateCatImage } = catDataSlice.actions

export default catDataSlice.reducer
