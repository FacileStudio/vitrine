import { clsx, type ClassValue } from "clsx"
import { warn } from "console"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
