import React from 'react';
import {Link} from 'react-router-dom';
const Header=()=>{
    return(
        <div>
             <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-body-dark" id="coloryellow" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">LionsTv</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>    
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bmovie">Bollywood Movie</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hmovie">Hollywood Movie</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">TV Show</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">South Movie</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Web Series</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Anime Series</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Help & Support</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/login">SignUp/SignIn</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div id="div3">
            <input type="search" id="search1" placeholder="What are you looking for ?"/>

            <input type="submit" id="search2" value="&#128269;"/>

        </div>
        <br/>
        <div className="size3">
            <span className="badge text-bg-success size2"><Link to="/">Dual Audio Content</Link></span>
            <span className="badge text-bg-danger size2"><Link to="/">K-Drama Series</Link></span>
            <span className="badge text-bg-warning size2"><Link to="/">Recommended Movies</Link></span>
            <span className="badge text-bg-info size2"><Link to="/">How To Download</Link></span>
        </div>
        <br/>
    </header>
        </div>
    );
}
export default Header;