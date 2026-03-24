/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/require-array-sort-compare */
/* eslint-disable sonarjs/no-alphabetical-sort */
import fs from 'node:fs';
import humanNames from 'human-names';
import { UNISEX } from 'wikidata-person-names';
const firstNames = new Set([
    ...humanNames.allEn.map((v) => v.toLowerCase()),
    ...humanNames.allIt.map((v) => v.toLowerCase()),
    ...humanNames.allFr.map((v) => v.toLowerCase()),
    ...humanNames.allDe.map((v) => v.toLowerCase()),
    ...humanNames.allEs.map((v) => v.toLowerCase()),
    ...humanNames.allNl.map((v) => v.toLowerCase()),
    ...UNISEX.map((v) => v.toLowerCase())
]);
const filePath = 'isFirstName/firstNames.json';
fs.writeFileSync(filePath, JSON.stringify([...firstNames].toSorted(), undefined, 2));
console.log(`Wrote ${firstNames.size} first names to ${filePath}`);
