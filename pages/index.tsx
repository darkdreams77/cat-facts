import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { FactResponse } from '../types/entities'

interface HomeProps {
  data: FactResponse
}

const Home = ({ data }: HomeProps) => {
  return (
    <div style={{ margin: '50px auto', width: '700px' }}>
      <Box sx={{ width: 700 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Cat Quote of the Moment
            </Typography>
            <Typography variant="h5" component="div">
              {data.fact}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>

  )
}

export async function getStaticProps() {
  const res = await fetch(`https://catfact.ninja/fact`)
  const data: FactResponse = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }


  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Home
