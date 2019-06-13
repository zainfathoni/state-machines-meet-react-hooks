import React, { useState } from 'react'
import { Button, Modal } from '../shared/Components'

export const App = () => {
  const [visible, setVisible] = useState(false)
  const [editing, setEditing] = useState(false)
  const [data, setData] = useState([])
  const [index, setIndex] = useState(-1)

  let stateValue
  if (visible && !editing && data && data.length > 1 && index < 0) {
    stateValue = 'list'
  } else if (
    visible &&
    !editing &&
    data &&
    ((data.length > 0 && index >= 0) || data.length === 1)
  ) {
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
          setData(['', ''])
        }}
      >
        Open Multiple
      </Button>
      &nbsp;
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
          setIndex(-1)
        }}
        onBack={() => setIndex(-1)}
        onView={() => setIndex(0)}
        stateValue={stateValue}
      />
    </main>
  )
}
