
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Pages/Navbar/Navbar'
import Home from './Components/Pages/Home/Home'
import Auction from './Components/Pages/Auction/Auction'
import Login from './Components/LoginOrSignup/Login/Login'
import Signup from './Components/LoginOrSignup/Signup/Signup'
import Blog from './Components/Pages/Blog/Blog'
import Services from './Components/Pages/Services/Services'
import Contact from './Components/Pages/Contact/Contact'
import Furniture from './Components/Pages/BidProducts/Furniture'

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
            <Route path='/blog' element={<Blog/>}/>
            <Route path="/services" element={<Services/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/furniture' element={<Furniture/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
