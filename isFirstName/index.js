import firstNames from './firstNames.json' with { type: 'json' };
export default function isFirstName(name) {
    return firstNames.includes(name.toLowerCase());
}
