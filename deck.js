import 'antd/dist/antd.css'
import './App.css'

export { nightOwlFull as theme } from 'code-surfer/themes'

import { slides as demo1 } from './demo-1.mdx'
import { slides as demo2 } from './demo-2.mdx'
import { slides as demo3 } from './demo-3.mdx'
import { slides as demo4 } from './demo-4.mdx'
import { slides as demo5 } from './demo-5.mdx'
import { slides as example } from './example.mdx'
import { slides as guards2 } from './guards-2.mdx'
import { slides as guards } from './guards.mdx'
import { slides as hierarchy } from './hierarchy.mdx'
import { slides as interpreter } from './interpreter.mdx'
import { slides as problem } from './problem.mdx'
import { slides as solution } from './solution.mdx'
import { slides as useMachine } from './use-machine.mdx'

export const slides = [
  ...problem,
  ...example,
  ...demo1,
  ...solution,
  ...demo2,
  ...interpreter,
  ...demo3,
  ...useMachine,
  ...demo4,
  ...hierarchy,
  ...demo5,
  ...guards,
  ...guards2,
]
