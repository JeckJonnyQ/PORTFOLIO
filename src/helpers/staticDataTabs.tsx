import CherryBlossom from '../assets/images/CherryBlossom.png';
import CoffeeHouse from '../assets/images/CoffeeHouse.png';
import GreenShop from '../assets/images/GreenShop.png';

import Puzzle from '../assets/images/Puzzle.png';
import Nonograms from '../assets/images/Nonograms.png';
import Hangman from '../assets/images/Hangman.png';

import BurgerLanding from '../assets/images/BurgerHouse.png';
import ReyNegro from '../assets/images/ReyNegro.png';

export interface TabsDataProps {
  id: number;
  name: string;
  description: string;
  link: string;
  photo: string;
  year: string;
  skills: string[];
}

export const TabsData: TabsDataProps[][] = [
  [
    {
      id: 1,
      name: 'CherryBlossom',
      description:
        'A dynamic website for selling flowers, which is implemented as a SPA using a pattern such as MVC. It is possible to register users and add products to the cart, a database such as FireBase was used to store information about users and products.',
      link: 'https://jeckjonnyq.github.io/CherryBlossom/',
      photo: CherryBlossom,
      year: 'September 2023',
      skills: ['HTML', 'SCSS', 'JavaScript', 'FireBase', 'WOW.js', 'Swiper.js', 'Figma', 'GitHub'],
    },
    {
      id: 2,
      name: 'CoffeeHouse',
      description:
        'An adaptive and responsive website for selling coffee, which features a slider with animation and a timer stop when hovering, tabs for product menus and colorful modals for product cards, as well as a burger menu for small screen sizes.',
      link: 'https://rolling-scopes-school.github.io/jeckjonnyq-JSFE2023Q4/coffee-house/',
      photo: CoffeeHouse,
      year: 'December 2023',
      skills: ['HTML', 'SCSS', 'JavaScript', 'JSON', 'Figma', 'GitHub'],
    },
    {
      id: 3,
      name: 'GreenShop',
      description:
        'SPA application is written in Typescript using React functional components with page routing and Webpack as a bundler for assembling the project. Implemented registration and authorization of users using shipping and billing addresses, dynamic addition of product data and storage of user data using the eCommerse Tools API as a database. More than 80% of the code is covered by Jest tests.',
      link: 'https://rsschool-greenshop-app.netlify.app/',
      photo: GreenShop,
      year: 'May 2024',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Routing',
        'Webpack',
        'eCommerce/API',
        'Toastify',
        'Jest',
        'Husky',
        'Eslint',
        'Prettier',
        'MaterialUI',
        'Emotion',
        'Axios',
        'Yup',
        'Zod',
        'ClickUp',
        'GitHub',
      ],
    },
  ],

  [
    {
      id: 4,
      name: 'PUZZLE',
      description:
        'A fun game, with my personal adaptive design, developed as a SPA application. It implements user registration in LS, visual and audio prompts.',
      link: 'https://puzzle-funny-game.netlify.app/',
      photo: Puzzle,
      year: 'March 2024',
      skills: ['HTML', 'SCSS', 'JavaScript', 'TypeScript', 'Webpack', 'Husky', 'Eslint', 'Prettier', 'JSON', 'GitHub'],
    },
    {
      id: 5,
      name: 'NONOGRAMS',
      description:
        "A very interesting Japanese game in which I implemented the ability to save the user's current progress and then load it, display a round hint, select and randomize a round, a results table, as well as my own design for a light and dark theme.",
      link: 'https://rolling-scopes-school.github.io/jeckjonnyq-JSFE2023Q4/Nonograms/',
      photo: Nonograms,
      year: 'February 2024',
      skills: ['HTML', 'SCSS', 'JavaScript', 'JSON', 'GitHub'],
    },
    {
      id: 6,
      name: 'HANGMAN',
      description:
        'A small and simple popular game that allows you to use both the mouse and the keyboard, as well as the impossibility of repeating questions.',
      link: 'https://rolling-scopes-school.github.io/jeckjonnyq-JSFE2023Q4/hangman/',
      photo: Hangman,
      year: 'January 2024',
      skills: ['HTML', 'SCSS', 'JavaScript', 'GitHub'],
    },
  ],

  [
    {
      id: 7,
      name: 'BurgerHouse',
      description:
        'The landing page, presenting a wide range of juicy burgers, is designed with easy and intuitive design navigation and a detailed menu for quick and easy ordering.',
      link: 'https://jeckjonnyq.github.io/Burger-Landing/',
      photo: BurgerLanding,
      year: 'July 2023',
      skills: ['HTML', 'CSS', 'JavaScript', 'Figma', 'GitHub'],
    },
    {
      id: 8,
      name: 'ReyNegro',
      description:
        'A small and colorful landing page with unobtrusive and soft animation for advertising and selling coffee beans on various platforms.',
      link: 'https://jeckjonnyq.github.io/ReyNegro/',
      photo: ReyNegro,
      year: 'October 2023',
      skills: ['HTML', 'SCSS', 'WOW.js', 'Figma', 'GitHub'],
    },
    // {
    //   id: 9,
    //   name: 'BurgerHouse',
    //   description: 'Это сайт про бургеры',
    //   link: 'https://jeckjonnyq.github.io/Burger-Landing/',
    //   photo: BurgerLanding,
    //   year: '2023',
    //   skills: ['HTML', 'CSS', 'JavaScript'],
    // },
  ],
];
