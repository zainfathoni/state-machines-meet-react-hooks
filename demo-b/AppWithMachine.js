import React from 'react'
import { Button, Modal } from '../shared/Components'
import { useMachine } from '../shared/useMachine'
import { modalMachine } from './machine'

export const App = () => {
  const [current, send] = useMachine(modalMachine, { devTools: true })

  return (
    <main className="app">
      <Button onClick={() => send('OPEN')}>Open Modal</Button>
      <Modal
        onClose={() => send('CLOSE')}
        onEdit={() => send('EDIT')}
        onSubmit={() => send('SUBMIT')}
        stateValue={current.value.visible}
      />
    </main>
  )
}
