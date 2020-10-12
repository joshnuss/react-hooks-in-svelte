import React from 'react'
import expensiveComputation from './expensive'

function ExpensiveToRenderButton({onClick}) {
  expensiveComputation()

  return <button onClick={onClick}>Click me!</button>
}

export default React.memo(ExpensiveToRenderButton)
