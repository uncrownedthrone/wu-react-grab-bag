import React, { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import { randomFillSync } from 'crypto'

const App = () => {
  const [bag, setBag] = useState([])
  const [itemToAdd, setItemToAdd] = useState('')

  const addNewItemToArray = () => {
    // this will take the current value of itemsToAdd
    // dd it to bag
    // we need to create a new array becuase the items in state
    // are immutable and so we need to create a new array and replace
    // the old with the new
    setBag([...bag, itemToAdd])
    setItemToAdd('')
  }

  const selectItemAtRandom = () => {
    const random = Math.ceil(Math.random() * bag.length)
  }

  return (
    <>
      <section>
        <input
          type='text'
          value={itemToAdd}
          onChange={e => {
            setItemToAdd(e.target.value)
          }}
        />
        <button onClick={addNewItemToArray}>ADD</button>
        <button onClick={selectItemAtRandom}>PICK RANDOM</button>
      </section>
      <ul>
        {bag.map((item, index) => {
          // this does the same thing.......
          // if (randomIndex === index) {
          //   return <li className='highlighted'>{item}</li>
          // } else {
          //   return <li>{item}</li>
          // }
          // as this........
          return randomIndex === index ? (
            <li className='highlighted'>{item}</li>
          ) : (
            <li>{item}</li>
          )
        })}
      </ul>
    </>
  )
}

export default App
