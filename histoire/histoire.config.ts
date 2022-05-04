import { HstScreenshot } from '@histoire/plugin-screenshot'
import {defineConfig} from 'histoire'

export default defineConfig({ 
  plugins: [HstScreenshot()],
    setupFile: '/src/histoire.setup.ts'
  })
