import firstNames from './firstNames.json' with { type: 'json' }

export default function isFirstName (name: string): boolean {
  return firstNames.includes(name.toLowerCase())
}
