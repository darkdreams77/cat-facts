import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box } from '@mui/system'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

const Fact = () => {
  const [catFact, setCatFact] = useState<string>('')
  const [catImage, setCatImage] = useState<any>('')

  useEffect(() => {
    axios
      .get('https://catfact.ninja/fact')
      .then((res) => {
        setCatFact(res.data.fact)
      })
      .catch((error) => console.error(error))

    axios
      .get('https://api.thecatapi.com/v1/images/search', {
        params: {
          'x-api-key': '44f356e7-1ed2-468c-93e6-24428117c37d',
        },
      })
      .then((res) => {
        setCatImage(res.data[0])
      })
      .catch((error) => console.error(error))
  }, [])

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
