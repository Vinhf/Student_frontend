import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/')
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchData() 
  }, []) 

  return (
    <>
      <h1>Test Data gửi qua frontend</h1>
      {data.map(user => (
        <div key={user.user_id}>
          <h2>{user.full_name}</h2>
        </div>
      ))}
    </>
  )
}

export default App
