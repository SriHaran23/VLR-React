import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h1>Navbar</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/Home'} className='mx-2'>Home</Link>
                            <Link to={'/Bill'} className='mx-2'>Billing</Link>
                            <Link to={'/Sales'} className='mx-2'>Sales</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header