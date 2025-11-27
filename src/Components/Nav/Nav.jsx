import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg position-fixed">
                <p className="navbar-brand d-flex align-items-center m-0" href="#">
                    <Link to='/' className='logo'>Luxe<span>Hub</span></Link>
                </p>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="menu navbar-nav align-items-center">
                        <li className="nav-item"><Link to='/'>Home</Link></li>
                        <li className="nav-item"><Link to='/about'>About</Link></li>
                        <li className="nav-item"><Link to='/rooms'>Our Rooms</Link></li>
                        <li className="nav-item"><Link to='/facilities'>Facilities</Link></li>
                        <li className="nav-item"><Link to='/blogs'>Blog</Link></li>
                        <li className="nav-item"><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <button className="btn rounded nav-btn">RESERVATION</button>
            </nav>
        </>
    )
}

export default Nav;