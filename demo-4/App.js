import React from 'react'
import { Button, Modal } from './Components'
import { modalMachine } from './machine'
import { useMachine } from './useMachine'

export const App = () => {
  const [current, send] = useMachine(modalMachine, { devTools: true })

  const handleOpen = () => send('OPEN')
  const handleClose = () => send('CLOSE')

  return (
    <main class="app">
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal onCancel={handleClose} visible={current.matches('visible')} />
    </main>
  )
}
