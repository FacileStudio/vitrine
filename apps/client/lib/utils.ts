import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isVideoFile = (src: string) => /\.(mp4|webm|ogg|mov)$/i.test(src)

export const pad2 = (n: number) => String(n).padStart(2, "0")
