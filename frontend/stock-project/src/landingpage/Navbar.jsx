import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {
   const navigate = useNavigate()
  const isLoggedIn = localStorage.getItem("token")

   const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <nav className="navbar navbar-expand-lg  border-bottom " style={{backgroundColor:"#fff"}}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="Media/Image/logo.svg" alt="Logo" style={{width:"25%"}} />
          </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <form className="d-flex">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">


              {!isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">Signup</Link>
                </li>
              )}

           

            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/product">Product</Link>
            </li>

              <li className="nav-item">
              <Link className="nav-link active" to="/pricing">Pricing</Link>
            </li>

              <li className="nav-item">
              <Link className="nav-link active" to="/support">Support</Link>
            </li>

            {isLoggedIn && (
                <li className="nav-item">
                  <button 
                    className="nav-link active btn btn-link" 
                    style={{textDecoration:"none"}}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              )}


          </ul>
          </form>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
