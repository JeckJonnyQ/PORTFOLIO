import { AboutInfo, Info, ContactInfo } from '../types/SectionAbout';

export const aboutInfo: AboutInfo[] = [
  { id: 1, className: 'about__greets', content: 'Hi, I am Vlad!' },
  { id: 2, className: 'about__location', content: 'Minsk, Belarus' },
  { id: 3, className: 'about__status', content: 'Available for new projects' },
];

export const contactInfo: Info = {
  description:
    'I have a higher education in the technical sphere, but in 2023 I decided to start studying front-end programming. This is a very interesting job, which not only provides the opportunity to express oneself creatively, but also requires continuous learning and following the latest technological trends.',
  email: 'reut-2011@mail.ru',
  phone: '+375(29)848-67-06',
};

export const contactData: ContactInfo[] = [
  {
    id: 1,
    title: 'Email',
    classBlock: 'email-block',
    classTitle: 'email-block_title',
    classLink: 'email-block_link',
    linkType: 'mailto',
    content: 'reut-2011@mail.ru',
  },
  {
    id: 2,
    title: 'Phone Number',
    classBlock: 'phone-block',
    classTitle: 'phone-block_title',
    classLink: 'phone-block_link',
    linkType: 'tel',
    content: '+375(29)848-67-06',
  },
];
