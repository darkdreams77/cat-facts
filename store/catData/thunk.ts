import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { CatImageType } from '../../types/entities'
import { CatDataState } from './slice'

export const fetchCatFact = createAsyncThunk<CatDataState, string>(
  'cat/fetchFact',
  async () => {
    const response = await axios.get('https://catfact.ninja/fact')
    return await response.data.fact
  }
)

export const fetchCatImage = createAsyncThunk<CatDataState, CatImageType>(
  'cat/fetchImage',
  async () => {
    const response = await axios.get(
      'https://api.thecatapi.com/v1/images/search',
      {
        params: {
          'x-api-key': '44f356e7-1ed2-468c-93e6-24428117c37d',
        },
      }
    )
    return await response.data[0]
  }
)
