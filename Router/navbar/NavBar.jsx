import React from "react"
import { Outlet } from "react-router-dom"
import "./nav.css"

const NavBar = () => {
  return (
    <>
      <body>
        <div className="nav">
          <div className="nav-link">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Abouts</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>

              <li >
                <a href="/login">Login</a>
              </li>
              <li className="left">
                <a href="/signup">sign up</a>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </body>
    </>
  )
}

export default NavBar
