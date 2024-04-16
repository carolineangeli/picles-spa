import { useState } from 'react'
import { Button } from './components/common/Button'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {count}
      <Button onClick={() => setCount(count + 1)}>Quero adotar</Button>
    </>
    
  )
}
