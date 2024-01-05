import React, { useState } from "react"

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handlesubmit = (event) => {
    event.preventDefault();
    fetch('https://student-auth.vercel.app/register', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json()).then((data) => {
      console.log(data)
      setName('');
      setEmail('');
      setPassword('')
    })
  }

  return (
    <> <body>
    <div className="container ">
      <div className="row1">
          <h1>sign up page</h1>
          
          <form onSubmit={handlesubmit} method="POST">
          <div className="row">
                <i className="fas fa-envelope-square"></i>
              <input type="text" onChange={() => setName(event.target.value)} placeholder="Name" />
              </div>
            <br />
            <div className="row">
                <i className="fas fa-envelope-square"></i>
              <input type="email" onChange={() => setEmail(event.target.value)} placeholder="Email" />
              </div>
            <br />
            <div className="row">
                <i className="fas fa-key"></i>
              <input type="Password" onChange={() => setPassword(event.target.value)} placeholder="Password" />
              </div>
              <br />
        <input type="submit" className="btn" value={"submit"} />
          </form>
        </div>
      </div>
      </body>
    </>
  )
}

export default Signup
