import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import { store } from './App';

const Nav = () => {
    const [token,setToken] = useContext(store)
    return (
        <div>
            
            {!token ?
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#"></a>
                </li>
              </ul> */}
              <form className="form-inline my-2 my-lg-0">
                <ul style={{listStyleType:"none"}}>
                  <div style={{marginLeft:"65em"}}>
                    <Link to='/register'>Register</Link>&nbsp;&nbsp;&nbsp;
                    <Link to='/login'>Login</Link>
                    </div>
                </ul>
                </form>
            </div>
          </nav>
            
            </div>
            :
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Dashboard</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            </nav>
}

        </div>
    )
}

export default Nav