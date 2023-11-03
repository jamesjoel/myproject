import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className="container-fluid nav-bar">
            <div className="container">
                <nav className="navbar navbar-light navbar-expand-lg py-4">
                    <NavLink to="index.html" className="navbar-brand">
                        <h1 className="text-primary fw-bold mb-0">Cater<span className="text-dark">Serv</span> </h1>
                    </NavLink>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                            <NavLink to="service.html" className="nav-item nav-link">Services</NavLink>
                            <NavLink to="event.html" className="nav-item nav-link">Events</NavLink>
                            <NavLink to="menu.html" className="nav-item nav-link">Menu</NavLink>
                            <div className="nav-item dropdown">
                                <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                                <div className="dropdown-menu bg-light">
                                    <NavLink to="book.html" className="dropdown-item">Booking</NavLink>
                                    <NavLink to="blog.html" className="dropdown-item">Our Blog</NavLink>
                                    <NavLink to="team.html" className="dropdown-item">Our Team</NavLink>
                                    <NavLink to="testimonial.html" className="dropdown-item">Testimonial</NavLink>
                                    <NavLink to="404.html" className="dropdown-item">404 Page</NavLink>
                                </div>
                            </div>
                            <NavLink to="contact.html" className="nav-item nav-link">Contact</NavLink>
                        </div>
                        <button className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                        <NavLink to="" className="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Book Now</NavLink>
                    </div>
                </nav>
            </div>
        </div>

         {/* Modal Search Start */}
         <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center">
                        <div className="input-group w-75 mx-auto d-flex">
                            <input type="search" className="form-control bg-transparent p-3" placeholder="keywords" aria-describedby="search-icon-1"/>
                            <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header