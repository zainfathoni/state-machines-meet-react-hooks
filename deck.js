import 'antd/dist/antd.css'
import './App.css'

export { nightOwlFull as theme } from 'code-surfer/themes'

import { slides as demo1 } from './demo-1.mdx'
import { slides as demo2 } from './demo-2.mdx'
import { slides as example } from './example.mdx'
import { slides as guards2 } from './guards-2.mdx'
import { slides as guards } from './guards.mdx'
import { slides as hierarchy } from './hierarchy.mdx'
import { slides as problem } from './problem.mdx'
import { slides as solution } from './solution.mdx'

export const slides = [
  ...problem,
  ...example,
  ...demo1,
  ...solution,
  ...demo2,
  ...hierarchy,
  ...guards,
  ...guards2,
]
