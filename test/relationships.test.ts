/* eslint-disable node-test/no-async-describe */
/* eslint-disable node-test/no-conditional-assertion */

import assert from 'node:assert'
import { describe, it } from 'node:test'

import {
  femaleRelationships,
  maleRelationships,
  neutralRelationships,
  relationships
} from '../index.js'

await describe('relationships', async () => {
  await it('should have a relationships array of strings', () => {
    assert.strictEqual(Array.isArray(relationships), true)
    assert.ok(relationships.length > 0)

    for (const relationship of relationships) {
      assert.strictEqual(typeof relationship, 'string')
    }
  })

  await it('should have male relationships arrays of strings', () => {
    for (const relationship of maleRelationships) {
      assert.strictEqual(typeof relationship, 'string')
    }

    assert.ok(maleRelationships.includes('Brother'))
    assert.ok(!maleRelationships.includes('Sibling'))
    assert.ok(!maleRelationships.includes('Sister'))
  })

  await it('should have female relationships arrays of strings', () => {
    for (const relationship of femaleRelationships) {
      assert.strictEqual(typeof relationship, 'string')
    }

    assert.ok(femaleRelationships.includes('Sister'))
    assert.ok(!femaleRelationships.includes('Sibling'))
    assert.ok(!femaleRelationships.includes('Brother'))
  })

  await it('should have neutral relationships arrays of strings', () => {
    for (const relationship of neutralRelationships) {
      assert.strictEqual(typeof relationship, 'string')
    }

    assert.ok(neutralRelationships.includes('Sibling'))
    assert.ok(!neutralRelationships.includes('Brother'))
    assert.ok(!neutralRelationships.includes('Sister'))
  })
})
