import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge class values into a single string
 * @param inputs The class values to merge
 * @returns a string of merged class values
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
