export interface AboutInfo {
  id: number;
  className: string;
  content: string;
}

export interface Info {
  description: string;
  email: string;
  phone: string;
}

export interface ContactInfo {
  id: number;
  title: string;
  classBlock: string;
  classTitle: string;
  classLink: string;
  linkType: 'mailto' | 'tel';
  content: string;
}
