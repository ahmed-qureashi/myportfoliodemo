import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function scrollToElement(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
    const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
