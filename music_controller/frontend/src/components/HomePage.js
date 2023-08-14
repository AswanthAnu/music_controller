import React from 'react'
import RoomJoinPage from './RoomJoinPage'
import CreateRoomPage from './CreateRoomPage'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
} from "react-router-dom"
import Room from './Room'

const HomePage = () => {
  return (
    <Router>
        <Routes>
            <Route  path="/" element={<p>This is the Homepage</p>}/>
            <Route path='/join'  element={<RoomJoinPage />}/>
            <Route path='/create' element={<CreateRoomPage />}/>
            <Route path='/room/:roomCode' element={<Room />}/>
        </Routes>
    </Router>
  )
}

export default HomePage