# Cemetery Utilities for Node

Utilities for cemetery systems (and probably other systems too!)

## Installation

```bash
npm install @cityssm/cemetery-utils
```

## Name Utilities

```javascript
isFirstName(namePiece)
```

- Checks whether a name string corresponds to a first name.
- Thanks [human-names](https://www.npmjs.com/package/human-names) and
  [wikidata-person-names](https://www.npmjs.com/package/wikidata-person-names)
  for the name lists!

```javascript
parseFullName(fullName)

parseFullName(fullName, { doFirstNameCheck: true })
```

- Parses a full name into its name parts, with optional first name verification
  for more reliable results.
- Thanks [parse-full-name](https://www.npmjs.com/package/parse-full-name)
  for the main parsing function!

## Name a Grave Utilities

See [Find a Grave](https://www.findagrave.com/),
a large database of cemetery and memorial records.

```javascript
getFindAGraveCemeteryUrl(cemeteryId)
```

- Builds a URL corresponding to a cemetery's page on the Find a Grave website
  from a Find a Grave cemetery ID.

```javascript
getFindAGraveMemorialUrl(memorialId)
```

- Builds a URL corresponding to a memorial's page from a Find a Grave memorial ID.

```javascript
getFindAGraveMemorialSearchUrl(cemeteryId, fullName, {
  birthYear: 1956,
  deathYear: 2026
})

getFindAGraveMemorialSearchUrl(
  cemeteryId,
  {
    first: 'John',
    last: 'Doe'
  },
  {
    deathYear: 2026
  }
)
```

- Builds a URL corresponding to a cemetery search results page for a given person.
- Find a Grave requires separate first and last name pieces for search,
  so when the name is given as a single string, it will be parsed.

## Related Projects

[**Sunrise CMS**](https://github.com/cityssm/sunrise-cms)<br />
A completely free, open source, web-based application to assist cemetery managers
with managing their cemetery records.
