import React, { useState } from 'react'
import { Button, Modal } from '../shared/Components'

export const App = () => {
  const [visible, setVisible] = useState(false)
  const [editing, setEditing] = useState(false)
  const [data, setData] = useState([])

  let stateValue
  if (visible && !editing && data && data.length > 0) {
    stateValue = 'view'
  } else if (visible && editing) {
    stateValue = 'edit'
  } else if (visible && (!data || data.length === 0)) {
    stateValue = 'create'
  }

  return (
    <main className="app">
      <Button
        onClick={() => {
          setVisible(true)
          setData([''])
        }}
      >
        Open Exists
      </Button>
      &nbsp;
      <Button onClick={() => setVisible(true)}>Open Empty</Button>
      <Modal
        onClose={() => {
          setVisible(false)
          setEditing(false)
          setData([])
        }}
        onEdit={() => setEditing(true)}
        onSubmit={() => {
          setVisible(false)
          setEditing(false)
          setData([])
        }}
        stateValue={stateValue}
      />
    </main>
  )
}
