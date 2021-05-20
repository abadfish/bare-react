import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

function App() {
  
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])

  return (
    <AppWrapper>
      <header className="App-header">
        <span>
          Page has been open for <code>{count}</code> seconds.
        </span>
      </header>
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div `
  height: 100vh;
  width: 100%;
  background-color: #d3d3d3;
`