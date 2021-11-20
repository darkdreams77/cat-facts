import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { FactResponse } from '../types/entities'

interface HomeProps {
  data: FactResponse
}

const Home = () => {
  const [catFact, setCatFact] = useState<string>('')

  useEffect(() => {
    axios
      .get('https://catfact.ninja/fact')
      .then((res) => {
        setCatFact(res.data.fact);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ margin: '50px auto', maxWidth: '700px', width: '100%' }}>
      <Box sx={{ width: '100%' }}>
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Cat Quote of the Moment
            </Typography>
            <Typography variant="h5" component="div">
              {catFact}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>

  )
}

// export async function getStaticProps() {
//   const res = await fetch(`https://catfact.ninja/fact`)
//   const data: FactResponse = await res.json()

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }


//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }

export default Home
