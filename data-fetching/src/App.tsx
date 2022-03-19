import { useEffect, useState } from 'react'

type Repositorios = {
  nickname:string;
  description:string;
}

function App() {
  const [repositorios,setRepositorios] = useState<Repositorios[]>([])
  useEffect(() =>{
    fetch('https://api.github.com/users/otavioaugusto1/repos')
    .then(response => response.json())
    .then(data => {
      setRepositorios(data)
    })
  })

  return (
    <div className="App">
      <h1>Hello, world!</h1>
    </div>
  )
}

export default App
