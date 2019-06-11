import { Machine } from 'xstate'

export const modalMachine = Machine({
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
      initial: 'list',
      states: {
        list: {
          on: {
            VIEW: 'view'
          }
        },
        view: {
          on: {
            EDIT: 'edit',
            BACK: 'list'
          }
        },
        edit: {
          on: {
            SUBMIT: '#invisible'
          }
        },
        create: {
          on: {
            SUBMIT: '#invisible'
          }
        }
      }
    }
  }
})
