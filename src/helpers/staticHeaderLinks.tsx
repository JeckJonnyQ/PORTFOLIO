export interface HeaderLinksProps {
  id: number;
  label: string;
  path: string;
}

export const HeaderLinks: HeaderLinksProps[] = [
  {
    id: 1,
    label: 'Home',
    path: 'home',
  },
  {
    id: 2,
    label: 'About Me',
    path: 'about-me',
  },
  {
    id: 3,
    label: 'Portfolio',
    path: 'portfolio',
  },
  {
    id: 4,
    label: 'Contacts',
    path: 'contacts',
  },
];
