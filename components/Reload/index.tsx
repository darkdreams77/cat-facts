import React from 'react'
import { Button } from '@mui/material'
import CachedIcon from '@mui/icons-material/Cached'

const Reload = () => {
  return (
    <>
      <Button variant="outlined">
        Reload <CachedIcon />
      </Button>
      <div style={{ marginBottom: '40px' }} />
    </>
  )
}

export default Reload
