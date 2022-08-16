import { sortDirection } from '../interfaces';

export function sortByNumber(
  arr: any[],
  key: string,
  sortDirection: sortDirection
) {
  return sortDirection === 'asc' ? arr.sort((a, b) => a[key] - b[key]) : arr.sort((a, b) => b[key] - a[key]);
}

export function sortByString(
  arr: any[],
  key: string,
  sortDirection: sortDirection
) {
  return sortDirection === 'asc' ? arr.sort((a, b) => a[key].localeCompare(b[key])) : arr.sort((a, b) => b[key].localeCompare(a[key]));
}
