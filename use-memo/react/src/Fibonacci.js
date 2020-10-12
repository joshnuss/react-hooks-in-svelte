import React, { useMemo, useState } from 'react'
import fibonacci from './fib' 

export default function Fibonacci() {
  const [value, setValue] = useState(0)
  const result = useMemo(() => {
    return fibonacci(value)
  }, [value])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input type="range" min="0" max="10" onChange={handleChange} value={value}/>
      <p>fib({value}) = {result}</p>
    </>
  )
}
