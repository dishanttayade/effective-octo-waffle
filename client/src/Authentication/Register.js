import { useState } from 'react'
import '../App.css';

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = async (event) =>{
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username, 
        email,
        password,
      }),
    })

    const data = response.json()
    console.log(data)
  }


  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input 
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          type="text" 
          placeholder="Name" 
        /> <br /> <br />
        <input
          value={email}
          onChange={(e)=> setEmail(e.target.value)} 
          type="text" 
          placeholder="Email" 
        /> <br /> <br />
        <input 
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          type="password" 
          placeholder="Password" 
        /> <br /> <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
