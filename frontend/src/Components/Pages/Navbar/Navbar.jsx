// import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg py-4" >
                    <div className="container-fluid">
                        {/* Left-Items */}
                        <div className="d-flex text-light text-decoration-none ms-4 ">
                            <NavLink to="/" className="text-light text-decoration-none" style={{fontWeight:"600"}} >Bidding</NavLink>
                        </div>
                        {/* center-Elements */}
                        <ul className='navbar-nav d-flex flex-row '>
                            <NavLink to="/"  className="me-4 text-light text-decoration-none" style={{fontWeight:"600"}}>Home</NavLink>
                            <NavLink to="/auction" className="me-4 text-light text-decoration-none" style={{fontWeight:"600"}}>Auction</NavLink>
                            <NavLink to="/blog" className="me-4 text-light text-decoration-none" style={{fontWeight:"600"}}>Blog</NavLink>
                            <NavLink to="/services" className="me-4 text-light text-decoration-none" style={{fontWeight:"600"}}>Services</NavLink>
                            <NavLink to="/contact" className="me-4 text-light text-decoration-none" style={{fontWeight:"600"}}>Contact</NavLink>
                        </ul>

                        {/* Right-Items */}
                        <ul className='navbar-nav d-flex nav-item'>
                            <NavLink to="/login" className="text-light text-decoration-none me-4" style={{fontWeight:"600"}}>Login</NavLink>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
