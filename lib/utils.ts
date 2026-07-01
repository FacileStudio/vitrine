import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { RefObject } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function past(ref: RefObject<HTMLElement | null>, triggerLine = 0.5) {
  return ref.current ? ref.current.getBoundingClientRect().top < window.innerHeight * triggerLine : false
}
