import { Machine } from 'xstate'

export const modalMachine = Machine({
  id: 'visibility',
  initial: 'invisible',
  states: {
    invisible: {
      on: {
        OPEN: 'visible'
      }
    },
    visible: {
      on: {
        CLOSE: 'invisible'
      }
    }
  }
})
