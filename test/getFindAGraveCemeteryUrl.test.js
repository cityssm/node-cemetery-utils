import assert from 'node:assert';
import { describe, it } from 'node:test';
import { getFindAGraveCemeteryUrl } from '../index.js';
await describe('getFindAGraveCemeteryUrl', async () => {
    await it('should return the correct URL for a valid cemetery ID', () => {
        const cemeteryId = 12_345;
        const expectedUrl = `https://www.findagrave.com/cemetery/${cemeteryId}`;
        const url = getFindAGraveCemeteryUrl(cemeteryId);
        assert.strictEqual(url, expectedUrl);
    });
    await it('should return undefined for a null cemetery ID', () => {
        // eslint-disable-next-line unicorn/no-null
        const url = getFindAGraveCemeteryUrl(null);
        assert.strictEqual(url, undefined);
    });
});
