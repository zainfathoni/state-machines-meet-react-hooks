import { Machine } from 'xstate'

export const modalMachine = Machine({
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
