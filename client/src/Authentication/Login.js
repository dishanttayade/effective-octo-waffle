import { useState } from 'react'
import '../App.css';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (event) =>{
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()
    if(data.user){
        alert('Login Successful')
        window.location.href = '/dashboard'
    }else {
        alert('Please check your username and password')
    }
    console.log(data)
  }


  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={loginUser}>
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
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
