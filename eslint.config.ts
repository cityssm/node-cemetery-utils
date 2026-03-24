import { cspellWords } from 'eslint-config-cityssm/exports.js'
import configCityssm, {
  defineConfig
} from 'eslint-config-cityssm/packageConfig'

export const config = defineConfig(configCityssm, {
  files: ['**/*.ts'],
  rules: {
    '@cspell/spellchecker': [
      'warn',
      {
        cspell: {
          words: [
            ...cspellWords,
            'firstname',
            'lastname',
            'birthyear',
            'deathyear'
          ]
        }
      }
    ]
  }
})

export default config
