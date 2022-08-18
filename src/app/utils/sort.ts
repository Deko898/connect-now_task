import { sortDirection } from '../interfaces';

export function sortByString<K extends string, T extends Record<K, string>>(
  arr: T[],
  key: K,
  sortDirection: sortDirection
) {
  return sortDirection === 'asc'
    ? arr.sort((a, b) => a[key].localeCompare(b[key]))
    : arr.sort((a, b) => b[key].localeCompare(a[key]));
}

export function sortByNumber<K extends string, T extends Record<K, number>>(
  arr: T[],
  key: K,
  sortDirection: sortDirection
) {
  return sortDirection === 'asc'
  ? arr.sort((a, b) => a[key] - b[key])
  : arr.sort((a, b) => b[key] - a[key]);
}
