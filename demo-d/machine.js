import { Machine } from 'xstate'

export const modalMachine = Machine(
  {
    id: 'listView',
    initial: 'invisible',
    states: {
      invisible: {
        id: 'invisible',
        on: {
          OPEN: [
            {
              cond: 'empty',
              target: 'visible.create'
            },
            {
              cond: 'single',
              target: 'visible.view'
            },
            { target: 'visible' }
          ]
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
  },
  {
    guards: {
      empty: (context, event) =>
        !event.data || (event.data && event.data.length === 0),
      single: (context, event) => event.data && event.data.length === 1
    }
  }
)
