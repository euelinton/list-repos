import React, { useState, useEffect } from 'react'

const App: React.FC = () => {
  const [repositories, setRepositories] = useState()
  
  useEffect(() => {
    async function loadData() {
      const response = await fetch('https://api.github.com/users/euelinton/repos')
      const data = await response.json()
  
      setRepositories(data)
    }
    loadData()
  }, [])

  return (
    <ul>
      {repositories?.map(repo => (
        <li>{repo.name}</li>
      ))}
    </ul>
  )
}

export default App
