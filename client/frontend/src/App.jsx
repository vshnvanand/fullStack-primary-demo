import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState(" ")

  useEffect(() => {
    fetch("http://3.92.147.166:4000/api/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch((err) => {
      console.error("Erro fetch message", err)
    })
  }, [])

  return (
    <>
      <h1>Welcome to the Website</h1>
      <h2>The data is displayed here - {message}</h2>
    </>
  )
}

export default App
