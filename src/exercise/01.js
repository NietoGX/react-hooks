// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting() {
  // 💣 delete this variable declaration and replace it with a React.useState call
  // const name = ''

  const [name, setName] = React.useState('David Nieto')

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    const {value} = event.target
    setName(value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
