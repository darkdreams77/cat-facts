import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

import { useCatFact } from '../../hooks/useCatFact'
import { useCatImage } from '../../hooks/useCatImage'

const Fact = () => {
  // const catImage = useTypedSelector((state) => state.catData.image)
  // const catFact = useTypedSelector((state) => state.catData.fact)

  const catFact = useCatFact()
  const catImage = useCatImage()

  return (
    <Card sx={{ maxWidth: 345, width: '100%' }} variant="outlined">
      <CardMedia component="img" height="140" src={catImage.url} />
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
