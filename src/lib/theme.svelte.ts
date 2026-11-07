import { browser } from "$app/environment";

type Theme = "light" | "dark";

function read(): Theme | null {
  try {
    const saved = localStorage.getItem("facile-theme");
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

function apply(value: Theme) {
  document.documentElement.classList.toggle("dark", value === "dark");
  document.documentElement.classList.toggle("light", value === "light");
  try {
    localStorage.setItem("facile-theme", value);
  } catch {}
}

export const theme = $state<{ value: Theme }>({ value: "dark" });

if (browser) {
  theme.value = read() ?? "dark";
  apply(theme.value);
}

/**
 * Switches between the light and dark themes and remembers the choice.
 */
export function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
  apply(theme.value);
}
