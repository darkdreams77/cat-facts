import React from 'react'
import { Button } from '@mui/material'
import CachedIcon from '@mui/icons-material/Cached'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { fetchCatFact, fetchCatImage } from '../../store/catData/thunk'

const Reload = () => {
  const dispatch = useDispatch<AppDispatch>()

  const updateCatData = () => {
    dispatch(fetchCatFact())
    dispatch(fetchCatImage())
  }

  return (
    <>
      <Button variant="outlined" onClick={() => updateCatData()}>
        Reload <CachedIcon />
      </Button>
      <div style={{ marginBottom: '40px' }} />
    </>
  )
}

export default Reload
