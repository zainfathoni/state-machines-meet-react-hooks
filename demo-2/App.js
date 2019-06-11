import React, { useState } from 'react'
import { Button, Modal } from './Components'
import { modalMachine } from './machine'

export const App = () => {
  const [current, setCurrent] = useState(modalMachine.initialState)

  const handleOpen = () => setCurrent(modalMachine.transition(current, 'OPEN'))
  const handleClose = () =>
    setCurrent(modalMachine.transition(current, 'CLOSE'))

  return (
    <main class="app">
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal onCancel={handleClose} visible={current.matches('visible')} />
    </main>
  )
}
