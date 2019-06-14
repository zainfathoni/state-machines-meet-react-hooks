import { Machine } from 'xstate'

export const modalMachine = Machine({
  id: 'editView',
  initial: 'invisible',
  states: {
    invisible: {
      id: 'invisible',
      on: {
        OPEN: 'visible'
      }
    },
    visible: {
      on: {
        CLOSE: 'invisible'
      },
      initial: 'view',
      states: {
        view: {
          on: {
            EDIT: 'edit'
          }
        },
        edit: {
          on: {
            SUBMIT: '#invisible'
          }
        }
      }
    }
  }
})
