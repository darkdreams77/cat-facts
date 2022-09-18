import { createAsyncThunk } from '@reduxjs/toolkit'
import { CatImageType } from '../../types/entities'
import { CatDataState } from './slice'

export const fetchCatFact = createAsyncThunk('cat/fetchFact', async () => {
  const response = await fetch('https://catfact.ninja/fact')
  const data = await response.json()
  return data
})

export const fetchCatImage = createAsyncThunk('cat/fetchImage', async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search', {
    headers: {
      'x-api-key': '44f356e7-1ed2-468c-93e6-24428117c37d',
    },
  })
  const data = await response.json()
  return data[0] as CatImageType
})
