export interface Project {
  slug: string;
  number: string;
  workTitle: string;
  pageTitle: string;
  comingSoon?: boolean;
}

export const projects: readonly Project[] = [
  {
    slug: 'senior-capstone',
    number: '01',
    workTitle: 'Senior Capstone',
    pageTitle: 'Senior Capstone - Master Salons',
  },
  {
    slug: 'digital-asset-management',
    number: '02',
    workTitle: 'Digital Asset Management Application',
    pageTitle: 'Digital Asset Management',
  },
  {
    slug: 'taxonomy-it-solutions',
    number: '03',
    workTitle: 'Taxonomy System & IT Solutions',
    pageTitle: 'Taxonomy & IT Solutions',
  },
  {
    slug: 'hackva-2027',
    number: '04',
    workTitle: 'HackVA 2027',
    pageTitle: 'HackVA 2027',
    comingSoon: true,
  },
  {
    slug: 'simventions-mission-support',
    number: '05',
    workTitle: 'SimVentions Mission Support',
    pageTitle: 'SimVentions Mission Support',
  },
];

export function projectPath(project: Project) {
  return `/projects/${project.slug}`;
}
