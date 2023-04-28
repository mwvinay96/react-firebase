import { useState } from 'react'
import './App.css'
import { Button, Grid, Typography } from '@mui/material'

function App() {
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  return (
    <Grid>
      {!isButtonClicked &&<Button variant='outlined' onClick={() => setIsButtonClicked(true)}>Hi</Button>}
      {isButtonClicked &&<Typography variant='h2'>Welcome to react firebase website</Typography>}
    </Grid>
  )
}

export default App
