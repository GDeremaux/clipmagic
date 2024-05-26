import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function objMap(
  obj: Object,
  func: Function
) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
}