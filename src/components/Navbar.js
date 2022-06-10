import React from 'react';
import '../App.css';
const Navbar = () => {
    return (
        <div className="container bg-secondary">
            <div className="row ">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light" >
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled text-white" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled text-white" href="#">our Clients</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled text-white" href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled text-white" href="#">Contact Us</a>
                                </li>
                            </ul>
                            <div>
                                <a className="nav-item lead text-white" href="#">
                                    <i className="fas fa-phone "> </i>
                                    Hotline:+5162600598
                                </a>
                            </div>

                        </div>
                    </nav>
                    <hr class="mt-2 mb-3 text-white" />
                    <div className="jumbotron jumbotron-fluid bg-secondary">
                        <div class="container">
                            <h1 className="display-1 font-weight-bolder text-white">Fusion Travel</h1>
                            <p className="lead text-white">Lets Discover The World Together</p>
                            <button type="button" className="btn btn-warning btn-lg text-white  btn btn-default">Plan Your Trip</button>
                        </div>
                    </div>

                    <div className="text-left">
                        <a className="lead text-white">
                            <i className="fab fa-youtube text-white">Watch</i>
                            <p>INTRO VIDEO</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;