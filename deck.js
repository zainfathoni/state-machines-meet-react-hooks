export { nightOwlFull as theme } from 'code-surfer/themes'

import { slides as example } from './example.mdx'
import { slides as problem } from './problem.mdx'
import { slides as solution } from './solution.mdx'

export const slides = [...problem, ...example, ...solution]
