export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'selected-work', label: 'Selected Work' },
  { id: 'about-me', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
] as const;

type SectionId = (typeof sections)[number]['id'];

export function sectionPath(id: SectionId) {
  return `/#${id}`;
}
