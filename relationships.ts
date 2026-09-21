export const genderedRelationships: Array<
  Partial<{
    neutral: string
    male: string
    female: string
  }>
> = [
  {
    neutral: 'Self',
    male: 'Self',
    female: 'Self'
  },
  {
    neutral: 'Partner',
    male: 'Boyfriend',
    female: 'Girlfriend'
  },
  {
    neutral: 'Spouse',
    male: 'Husband',
    female: 'Wife'
  },
  {
    neutral: 'Sibling',
    male: 'Brother',
    female: 'Sister'
  },
  {
    neutral: 'Parent',
    male: 'Father',
    female: 'Mother'
  },
  {
    neutral: 'Child',
    male: 'Son',
    female: 'Daughter'
  },
  {
    neutral: 'Grandparent',
    male: 'Grandfather',
    female: 'Grandmother'
  },
  {
    neutral: 'Grandchild',
    male: 'Grandson',
    female: 'Granddaughter'
  },
  {
    male: 'Uncle',
    female: 'Aunt'
  },
  {
    male: 'Nephew',
    female: 'Niece'
  },
  {
    neutral: 'Cousin',
    male: 'Cousin',
    female: 'Cousin'
  },
  {
    neutral: 'Friend',
    male: 'Friend',
    female: 'Friend'
  }
]

const allRelationshipsSet = new Set<string>()

export const maleRelationships: string[] = []
export const femaleRelationships: string[] = []
export const neutralRelationships: string[] = []

for (const relationship of genderedRelationships) {
  if (relationship.neutral !== undefined) {
    allRelationshipsSet.add(relationship.neutral)
    neutralRelationships.push(relationship.neutral)
  }

  if (relationship.male !== undefined) {
    allRelationshipsSet.add(relationship.male)
    maleRelationships.push(relationship.male)
  }

  // eslint-disable-next-line unicorn/prefer-continue
  if (relationship.female !== undefined) {
    allRelationshipsSet.add(relationship.female)
    femaleRelationships.push(relationship.female)
  }
}

const allRelationships = [...allRelationshipsSet]

export default allRelationships
