import React from 'react'
import { Button, Modal } from './Components'
import { modalMachine } from './machine'
import { useMachine } from './useMachine'

export const App = () => {
  const [current, send] = useMachine(modalMachine, { devTools: true })

  const handleOpenMultiple = () => send({ type: 'OPEN', data: ['', ''] })
  const handleOpenSingle = () => send({ type: 'OPEN', data: [''] })
  const handleOpenEmpty = () => send({ type: 'OPEN', data: [] })
  const handleClose = () => send('CLOSE')
  const handleView = () => send('VIEW')
  const handleEdit = () => send('EDIT')
  const handleBack = () => send('BACK')
  const handleSubmit = () => send('SUBMIT')

  return (
    <main class="app">
      <Button onClick={handleOpenMultiple}>Multiple Items</Button>&nbsp;
      <Button onClick={handleOpenSingle}>Single Item</Button>&nbsp;
      <Button onClick={handleOpenEmpty}>No Item</Button>&nbsp;
      <Modal
        onCancel={handleClose}
        stateValue={current.value.visible}
        onView={handleView}
        onEdit={handleEdit}
        onBack={handleBack}
        onSubmit={handleSubmit}
      />
    </main>
  )
}
