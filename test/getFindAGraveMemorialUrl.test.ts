import assert from 'node:assert'
import { describe, it } from 'node:test'

import { getFindAGraveMemorialUrl } from '../index.js'

await describe('getFindAGraveMemorialUrl', async () => {
  await it('should return the correct URL for a valid memorial ID', () => {
    const memorialId = 12_345
    const expectedUrl = `https://www.findagrave.com/memorial/${memorialId}`

    const url = getFindAGraveMemorialUrl(memorialId)

    assert.strictEqual(url, expectedUrl)
  })

  await it('should return undefined for a null memorial ID', () => {
    // eslint-disable-next-line unicorn/no-null
    const url = getFindAGraveMemorialUrl(null)

    assert.strictEqual(url, undefined)
  })
})
