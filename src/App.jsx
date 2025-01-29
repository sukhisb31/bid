
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Pages/Navbar/Navbar'
import Home from './Components/Pages/Home/Home'
import Auction from './Components/Pages/Auction/Auction'
import Login from './Components/LoginOrSignup/Login/Login'
import Signup from './Components/LoginOrSignup/Signup/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/auction' element={<Auction/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
