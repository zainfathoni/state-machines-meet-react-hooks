export { nightOwlFull as theme } from 'code-surfer/themes'

import { slides as example } from './example.mdx'
import { slides as problem } from './problem.mdx'
import { slides as solution } from './solution.mdx'
import { slides as hierarchy } from './hierarchy.mdx'
import { slides as guards } from './guards.mdx'
import { slides as guards2 } from './guards-2.mdx'

export const slides = [
  ...problem,
  ...example,
  ...solution,
  ...hierarchy,
  ...guards,
  ...guards2,
]
