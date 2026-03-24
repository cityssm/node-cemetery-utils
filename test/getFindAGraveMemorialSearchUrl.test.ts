import assert from 'node:assert'
import { describe, it } from 'node:test'

import { getFindAGraveMemorialSearchUrl } from '../index.js'

// eslint-disable-next-line no-secrets/no-secrets
await describe('getFindAGraveMemorialSearchUrl', async () => {
  await it('should return the correct URL for a valid name and location', () => {
    const cemeteryId = 12_345
    const name = 'John Doe'

    const url = getFindAGraveMemorialSearchUrl(cemeteryId, name)

    assert.ok(
      url?.startsWith(
        `https://www.findagrave.com/cemetery/${cemeteryId}/memorial-search?`
      ) ?? false
    )
    assert.ok(url?.includes('firstname=John') ?? false)
    assert.ok(url?.includes('lastname=Doe') ?? false)
  })

  await it('should return the correct URL with additional filters', () => {
    const cemeteryId = 12_345
    const name = 'Jane Doe'
    const birthYear = 1900
    const deathYear = 1950

    const url = getFindAGraveMemorialSearchUrl(cemeteryId, name, {
      birthYear,
      deathYear
    })

    assert.ok(
      url?.startsWith(
        `https://www.findagrave.com/cemetery/${cemeteryId}/memorial-search?`
      ) ?? false
    )

    assert.ok(url?.includes('firstname=Jane') ?? false)
    assert.ok(url?.includes('lastname=Doe') ?? false)
    assert.ok(url?.includes(`birthyear=${birthYear}`) ?? false)
    assert.ok(url?.includes(`deathyear=${deathYear}`) ?? false)
  })

  await it('should return undefined for a null cemetery ID', () => {
    const name = 'John Doe'
    // eslint-disable-next-line unicorn/no-null
    const url = getFindAGraveMemorialSearchUrl(null, name)

    assert.strictEqual(url, undefined)
  })
})
