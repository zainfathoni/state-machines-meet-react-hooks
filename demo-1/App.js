import React, { useState } from 'react'
import { Button, Modal } from './Components'

export const App = () => {
  const [visible, setVisible] = useState(false)
  return (
    <main class="app">
      <Button onClick={() => setVisible(true)}>Open Modal</Button>
      <Modal onCancel={() => setVisible(false)} visible={visible} />
    </main>
  )
}
