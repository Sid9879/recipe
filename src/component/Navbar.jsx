import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  let arr = JSON.parse(localStorage.getItem("favitem"))||[];

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid d-flex gap-5 pe-4 list-unstyled">
  <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/wishlist"> Wishlist <i class="bi bi-heart "></i><sup>{arr.length}</sup></Link>
        </li>
      </ul>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item me-1"><Link to ="https://www.facebook.com/"><i class="bi bi-facebook"></i></Link></li>
    <li className="nav-item me-1"><Link to =""><i class="bi bi-twitter"></i></Link></li>
    <li className="nav-item me-1"><Link to ="https://www.instagram.com/dayite5536/?hl=en"><i class="bi bi-instagram"></i></Link></li>
    <li className="nav-item me-1"><Link to =""><i class="bi bi-messenger"></i></Link></li>
      </ul>
    </div>
    
  </div>
</nav>

    </div>
  )
}

export default Navbar
