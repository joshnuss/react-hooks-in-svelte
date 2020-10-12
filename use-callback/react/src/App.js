import React, { useCallback, useState } from 'react'
import ExpensiveToRenderButton from './ExpensiveToRenderButton'

export default function App() {
  const [name, setName] = useState("world")
  const [age, setAge] = useState(4534000000)

  const handleClick = useCallback(() => {
    alert(`Hello ${name}!`)
  }, [name])

  return (
    <>
      <input onChange={e => setName(e.target.value)} value={name}/>
      <input onChange={e => setAge(e.target.value)} value={age}/>
      <ExpensiveToRenderButton onClick={handleClick}/>
    </>
  )
}
