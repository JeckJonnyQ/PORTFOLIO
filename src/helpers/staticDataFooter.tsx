import IconFooterTelegram from '../assets/Icons/IconFooterTelegram.png';
import IconFooterGitHub from '../assets/Icons/IconFooterGitHub.png';
import IconFooterLinkdIn from '../assets/Icons/IconFooterLinkdIn.png';

import { FooterContentTypes, SocialIconTypes } from '../types/SectionFooter';

export const FooterContent: FooterContentTypes = {
  title: 'Contact me!',
  titleSocial: 'Social',
  titleContacts: 'Contacts',
  content:
    "What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.",
  emailLinkPath: 'mailto:reut-2011@mail.ru',
  email: 'reut-2011@mail.ru',
  phoneLinkPath: 'tel:+375(29)848-67-06',
  phone: '+375(29)848-67-06',
};

export const SocialIcons: SocialIconTypes[] = [
  {
    id: 'Telegram',
    icon: IconFooterTelegram,
    alt: 'TelegramIcon',
    href: 'https://t.me/JeckJonny',
  },
  {
    id: 'GitHub',
    icon: IconFooterGitHub,
    alt: 'GitHubIcon',
    href: 'https://github.com/JeckJonnyQ',
  },
  {
    id: 'LinkedIn',
    icon: IconFooterLinkdIn,
    alt: 'LinkedInIcon',
    href: 'https://www.linkedin.com/in/vladislav-reut-466b48317/',
  },
];
