import { useState } from 'react'

export default function ColorButton() {
  const [color, setColor] = useState('blue')

  const handleClick = () => {
    setColor(color === 'blue' ? 'red' : 'blue')
  }

  return (
    <button
      onClick={handleClick}
      className={`bg-${color}-500 text-white font-bold py-2 px-4 rounded`}
    >
      Click me
    </button>
  )
}