import React, { useEffect } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

import { AppDispatch, useTypedSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { fetchCatFact, fetchCatImage } from '../../store/catData/thunk'

const Fact = () => {
  const dispatch = useDispatch<AppDispatch>()
  const catImage = useTypedSelector((state) => state.catData.image)
  const catFact = useTypedSelector((state) => state.catData.fact)

  useEffect(() => {
    dispatch(fetchCatFact())
    dispatch(fetchCatImage())
  }, [dispatch])

  return (
    <Card sx={{ maxWidth: 345, width: '100%' }} variant="outlined">
      <CardMedia component="img" height="180" image={catImage?.url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cat fact of the moment
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {catFact}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Fact
