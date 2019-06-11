import React, { useState } from 'react'
import { Button, Modal } from './Components'
import { modalMachine } from './machine'

export const App = () => {
  const [state, setState] = useState(modalMachine.initialState)

  const handleOpen = () => setState(modalMachine.transition(state, 'OPEN'))
  const handleClose = () => setState(modalMachine.transition(state, 'CLOSE'))

  return (
    <main class="app">
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal onCancel={handleClose} visible={state.matches('visible')} />
    </main>
  )
}
