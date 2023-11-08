import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
function App() {
  const [token, setToken] = useState(null)


  return (
    <>
      <Authenticate token = {token} setToken = {setToken}/>
      <SignUpForm setToken = {setToken} token = {token}/>
    </>
  )
}

export default App
