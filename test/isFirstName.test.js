import assert from 'node:assert';
import { describe, it } from 'node:test';
import { isFirstName } from '../index.js';
await describe('isFirstName', async () => {
    await it('should return true for known first names', () => {
        assert.ok(isFirstName('John'));
        assert.ok(isFirstName('Maria'));
        assert.ok(isFirstName('Jean'));
        assert.ok(isFirstName('Hans'));
        assert.ok(isFirstName('Carlos'));
        assert.ok(isFirstName('Sophie'));
        assert.ok(isFirstName('Alex'));
    });
    await it('should return false for non-first names', () => {
        assert.ok(!isFirstName('Smith'));
        assert.ok(!isFirstName('Doe'));
        assert.ok(!isFirstName('Johnson'));
        assert.ok(!isFirstName('Williams'));
    });
});
