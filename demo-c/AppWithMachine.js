import React from 'react'
import { Button, Modal } from '../shared/Components'
import { useMachine } from '../shared/useMachine'
import { modalMachine } from './machine'

export const App = () => {
  const [current, send] = useMachine(modalMachine, { devTools: true })

  return (
    <main className="app">
      <Button onClick={() => send({ type: 'OPEN', data: [''] })}>
        Open Exists
      </Button>
      &nbsp;
      <Button onClick={() => send({ type: 'OPEN', data: [] })}>
        Open Empty
      </Button>
      <Modal
        onClose={() => send('CLOSE')}
        onEdit={() => send('EDIT')}
        onSubmit={() => send('SUBMIT')}
        stateValue={current.value.visible}
      />
    </main>
  )
}
