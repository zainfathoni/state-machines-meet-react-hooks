import { Machine } from 'xstate'

export const modalMachine = Machine({
  id: 'createView',
  initial: 'invisible',
  states: {
    invisible: {
      id: 'invisible',
      on: {
        OPEN: [
          {
            cond: (context, event) =>
              !event.data || (event.data && event.data.length === 0),
            target: 'visible.create'
          },
          { target: 'visible' }
        ]
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
