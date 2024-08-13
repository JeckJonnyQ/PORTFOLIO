import TelegramIconFooter from '../assets/Icons/IconFooterTelegram.png';
import GitHubIconFooter from '../assets/Icons/IconFooterGitHub.png';
import LinkdInIconFooter from '../assets/Icons/IconFooterLinkdIn.png';
import DiscordIconFooter from '../assets/Icons/IconFooterDiscord.png';

import TelegramIconHome from '../assets/Icons/HomeSocialTlegram.png';
import GitHubIconHome from '../assets/Icons/HomeSocialGit.png';
import LinkedInIconHome from '../assets/Icons/HomeSocialLinkedIn.png';
import DiscordIconHome from '../assets/Icons/HomeSocialDisc.png';

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
    iconHome: TelegramIconHome,
    iconFooter: TelegramIconFooter,
    alt: 'TelegramIcon',
    href: 'https://t.me/JeckJonny',
  },
  {
    id: 'GitHub',
    iconHome: GitHubIconHome,
    iconFooter: GitHubIconFooter,
    alt: 'GitHubIcon',
    href: 'https://github.com/JeckJonnyQ',
  },
  {
    id: 'LinkedIn',
    iconHome: LinkedInIconHome,
    iconFooter: LinkdInIconFooter,
    alt: 'LinkedInIcon',
    href: 'https://www.linkedin.com/in/vladislav-reut-466b48317/',
  },
  {
    id: 'Discord',
    iconHome: DiscordIconHome,
    iconFooter: DiscordIconFooter,
    alt: 'Discord',
    href: 'https://discordapp.com/users/457605217027096576/',
  },
];
