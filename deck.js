import 'antd/dist/antd.css'
import './App.css'

export { nightOwlFull as theme } from 'code-surfer/themes'

import { slides as comparison } from './comparison.mdx'
import { slides as conclusion } from './conclusion.mdx'
import { slides as demoA } from './demo-a.mdx'
import { slides as demoB } from './demo-b.mdx'
import { slides as demoC } from './demo-c.mdx'
import { slides as demoD } from './demo-d.mdx'
import { slides as interpreter } from './interpreter.mdx'
import { slides as introduction } from './introduction.mdx'
import { slides as toggle } from './toggle.mdx'
import { slides as useMachine } from './use-machine.mdx'

export const slides = [
  ...introduction,
  ...toggle,
  ...demoA,
  ...demoB,
  ...demoC,
  ...demoD,
  ...comparison,
  ...conclusion,
]
