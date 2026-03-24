import assert from 'node:assert';
import { describe, it } from 'node:test';
import { parseFullName } from '../index.js';
await describe('parseFullName', async () => {
    await it('should correctly parse a full name with first, middle, and last names', () => {
        const name = 'John Michael Doe';
        const parsed = parseFullName(name);
        assert.strictEqual(parsed.first, 'John');
        assert.strictEqual(parsed.middle, 'Michael');
        assert.strictEqual(parsed.last, 'Doe');
    });
    await it('should correctly parse a full name with only first and last names', () => {
        const name = 'Jane Doe';
        const parsed = parseFullName(name);
        assert.strictEqual(parsed.first, 'Jane');
        assert.strictEqual(parsed.middle, '');
        assert.strictEqual(parsed.last, 'Doe');
    });
    await it('should correctly parse a full name with a comma separating last and first names', () => {
        const name = 'Doe, John';
        const parsed = parseFullName(name);
        assert.strictEqual(parsed.first, 'John');
        assert.strictEqual(parsed.middle, '');
        assert.strictEqual(parsed.last, 'Doe');
    });
    await it('should correctly parse a full name with a suffix', () => {
        const name = 'John Doe Jr.';
        const parsed = parseFullName(name);
        assert.strictEqual(parsed.first, 'John');
        assert.strictEqual(parsed.middle, '');
        assert.strictEqual(parsed.last, 'Doe');
        assert.strictEqual(parsed.suffix, 'Jr.');
    });
    await it('should correctly parse a full name with a prefix', () => {
        const name = 'Dr. Jane Doe';
        const parsed = parseFullName(name);
        assert.strictEqual(parsed.first, 'Jane');
        assert.strictEqual(parsed.middle, '');
        assert.strictEqual(parsed.last, 'Doe');
        assert.strictEqual(parsed.title, 'Dr.');
    });
    await it('should adjust orders on names without middle names when doFirstNameCheck is enabled', () => {
        const name = 'Doe John';
        const parsed = parseFullName(name, { doFirstNameCheck: true });
        assert.strictEqual(parsed.first, 'John');
        assert.strictEqual(parsed.middle, '');
        assert.strictEqual(parsed.last, 'Doe');
    });
    await it('should adjust orders on names with middle names when doFirstNameCheck is enabled', () => {
        const name = 'Doe John Michael';
        const parsed = parseFullName(name, { doFirstNameCheck: true });
        assert.strictEqual(parsed.first, 'John');
        assert.strictEqual(parsed.middle, 'Michael');
        assert.strictEqual(parsed.last, 'Doe');
    });
    await it('should not adjust orders when doFirstNameCheck is enabled but the first name is valid', () => {
        const name = 'John Smith';
        const parsed = parseFullName(name, { doFirstNameCheck: true });
        assert.strictEqual(parsed.first, 'John');
        assert.strictEqual(parsed.middle, '');
        assert.strictEqual(parsed.last, 'Smith');
    });
});
