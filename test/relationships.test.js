/* eslint-disable node-test/no-async-describe */
import assert from 'node:assert';
import { describe, it } from 'node:test';
import { relationships } from '../index.js';
await describe('relationships', async () => {
    await it('should have a relationships array of strings', () => {
        assert.strictEqual(Array.isArray(relationships), true);
        assert.ok(relationships.length > 0);
        for (const relationship of relationships) {
            // eslint-disable-next-line node-test/no-conditional-assertion
            assert.strictEqual(typeof relationship, 'string');
        }
    });
});
