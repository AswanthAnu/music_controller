import React, { useState, useEffect } from 'react'
import RoomJoinPage from './RoomJoinPage'
import CreateRoomPage from './CreateRoomPage'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
    Navigate
} from "react-router-dom"
import Room from './Room'
import { Grid, Typography, ButtonGroup, Button } from '@material-ui/core'



const HomePage = () => {

  const [roomCode, setRoomCode] = useState(null)

  useEffect(() => {
    async function fetchRoomCode() {
      const response = await fetch("/api/user-in-room")
      const data = await response.json()
      setRoomCode(data.code)
    }
    fetchRoomCode()
  }, [])



  const renderHomePage = () => {
    return(
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography  variant="h3" compact="h3">
            House Party
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/join" component={Link}>
              Join a Room
            </Button>
            <Button color="secondary" to="/create" component={Link}>
              Create a Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    )
  }
  return (
    <Router>
        <Routes>
            <Route path="/" element={
              roomCode ? <Navigate to={`/room/${roomCode}`} />: renderHomePage}/>
            <Route path='/join'  element={<RoomJoinPage />}/>
            <Route path='/create' element={<CreateRoomPage />}/>
            <Route path='/room/:roomCode' element={<Room />}/>
        </Routes>
    </Router>
  )
}

export default HomePage