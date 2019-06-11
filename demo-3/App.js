import React, { useEffect, useRef, useState } from 'react'
import { interpret } from 'xstate'
import { Button, Modal } from './Components'
import { modalMachine } from './machine'

export const App = () => {
  const [current, setCurrent] = useState(modalMachine.initialState)

  const serviceRef = useRef(null)

  if (serviceRef.current === null) {
    serviceRef.current = interpret(modalMachine, {
      devTools: true,
    }).onTransition(state => {
      if (state.changed) {
        setCurrent(state)
      }
    })
  }

  const service = serviceRef.current

  useEffect(() => {
    service.start()

    return () => {
      service.stop()
    }
  }, [service])

  const handleOpen = () => service.send('OPEN')
  const handleClose = () => service.send('CLOSE')

  return (
    <main class="app">
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal onCancel={handleClose} visible={current.matches('visible')} />
    </main>
  )
}
