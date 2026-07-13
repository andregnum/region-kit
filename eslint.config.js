import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    name: 'region-kit/ignores',
    ignores: ['**/node_modules/**', '**/dist/**', '**/coverage/**']
  },
  {
    name: 'region-kit/javascript-and-typescript',
    files: ['**/*.{js,cjs,mjs,ts,cts,mts}'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      globals: globals.node
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    }
  }
])
