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
  },[])

  return (
    <div className="App">
      <ul>
        {repositorios.map(repo => {
          return(
            <li key={repo.nickname}>
              <strong>{repo.description}</strong>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
