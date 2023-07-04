import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4 text-white" href="/">E-COM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold text-white" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold text-white" href="/">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold text-white" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold text-white" href="/">Contact</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href='/' className="btn btn-outline-light "><i className="fa fa-sign-in me-1"></i>Login</a>
                            <a href='/' className="btn btn-outline-light ms-2 rounded-circle "><i className="fa fa-user "></i></a>
                            <a href='/' className="btn btn-outline-light ms-2"><i className="fa fa-shopping-cart me-1"></i>Cart(0)</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar