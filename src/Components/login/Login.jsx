import React, { useState } from "react"
import "./login.css"
import{BsFillEnvelopeAtFill} from ''

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handlesubmit = (event) => {
    event.preventDefault()
    fetch("https://student-auth.vercel.app/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setEmail("")
        setPassword("")
      })
  }
  return (
    <>
      <body>
        <div className="container">
          <div className="row1">
            <h1>LogIn</h1>
            

            <form onSubmit={handlesubmit} method="POST">
              <div className="row">
                <i className="fas fa-envelope-square"></i>
                <input
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                />
              </div>
              <br />

              <div className="row">
                <i className="fas fa-key"></i>
                <input
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value)
                  }}
                  placeholder="Password"
                />
              </div>
              <br />
              <input className="btn" type="submit" placeholder="submit" />
            </form>
          </div>
        </div>
      </body>
    </>
  )
}

export default Login
