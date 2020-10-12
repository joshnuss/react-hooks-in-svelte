import React, { useRef } from 'react'

export default function TextInputWithFocusButton() {
  const inputEl = useRef(null)
  const handleClick = () => {
    inputEl.current.focus()
  }

  return (
    <>
      <input ref={inputEl}/>
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}
