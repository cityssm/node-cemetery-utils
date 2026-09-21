export const genderedRelationships = [
    {
        female: 'Self',
        male: 'Self',
        neutral: 'Self'
    },
    {
        female: 'Girlfriend',
        male: 'Boyfriend',
        neutral: 'Partner'
    },
    {
        female: 'Wife',
        male: 'Husband',
        neutral: 'Spouse'
    },
    {
        female: 'Sister',
        male: 'Brother',
        neutral: 'Sibling'
    },
    {
        female: 'Mother',
        male: 'Father',
        neutral: 'Parent'
    },
    {
        female: 'Daughter',
        male: 'Son',
        neutral: 'Child'
    },
    {
        female: 'Grandmother',
        male: 'Grandfather',
        neutral: 'Grandparent'
    },
    {
        female: 'Granddaughter',
        male: 'Grandson',
        neutral: 'Grandchild'
    },
    {
        female: 'Aunt',
        male: 'Uncle'
    },
    {
        female: 'Niece',
        male: 'Nephew'
    },
    {
        female: 'Cousin',
        male: 'Cousin',
        neutral: 'Cousin'
    },
    {
        female: 'Friend',
        male: 'Friend',
        neutral: 'Friend'
    }
];
const allRelationshipsSet = new Set();
export const maleRelationships = [];
export const femaleRelationships = [];
export const neutralRelationships = [];
for (const relationship of genderedRelationships) {
    if (relationship.neutral !== undefined) {
        allRelationshipsSet.add(relationship.neutral);
        neutralRelationships.push(relationship.neutral);
    }
    if (relationship.male !== undefined) {
        allRelationshipsSet.add(relationship.male);
        maleRelationships.push(relationship.male);
    }
    // eslint-disable-next-line unicorn/prefer-continue
    if (relationship.female !== undefined) {
        allRelationshipsSet.add(relationship.female);
        femaleRelationships.push(relationship.female);
    }
}
const allRelationships = [...allRelationshipsSet];
export default allRelationships;
