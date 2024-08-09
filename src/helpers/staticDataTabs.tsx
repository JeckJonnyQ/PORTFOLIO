import BurgerLanding from '../assets/images/BurgerHouse.png';

export interface TabsDataProps {
  id: number;
  workName: string;
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
      workName: 'BurgerHouse',
      description:
        'The landing page, presenting a wide range of juicy burgers, is designed with easy and intuitive design navigation and a detailed menu for quick and easy ordering.',
      link: 'https://jeckjonnyq.github.io/Burger-Landing/',
      photo: BurgerLanding,
      year: 'July - 2023',
      skills: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Git/GitHub'],
    },
    {
      id: 2,
      workName: 'ReyNegro',
      description: 'Это сайт про кофе',
      link: 'https://jeckjonnyq.github.io/Burger-Landing/',
      photo: BurgerLanding,
      year: '2023',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 3,
      workName: 'BurgerHouse',
      description: 'Это сайт про бургеры',
      link: 'https://jeckjonnyq.github.io/Burger-Landing/',
      photo: BurgerLanding,
      year: '2023',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
  ],

  [
    {
      id: 4,
      workName: 'NewProject',
      description: 'Описание нового проекта',
      link: 'https://jeckjonnyq.github.io/Burger-Landing/',
      photo: BurgerLanding,
      year: '2023',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 5,
      workName: 'AnotherProject',
      description: 'Описание другого проекта',
      link: 'https://jeckjonnyq.github.io/Burger-Landing/',
      photo: BurgerLanding,
      year: '2023',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 6,
      workName: 'ThirdProject',
      description: 'Описание третьего проекта',
      link: 'https://jeckjonnyq.github.io/Burger-Landing/',
      photo: BurgerLanding,
      year: '2023',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
  ],

  [
    {
      id: 7,
      workName: 'HungMAn',
      description: 'Pltcm Здесь будет описание игры ХАНГМАН',
      link: 'https://jeckjonnyq.github.io/Burger-Landing/',
      photo: BurgerLanding,
      year: '2023',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 8,
      workName: 'NONOGRAMS',
      description: 'Описание игры НОНОГРАММЫ',
      link: 'https://jeckjonnyq.github.io/Burger-Landing/',
      photo: BurgerLanding,
      year: '2023',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 9,
      workName: 'RSSPUZZLE',
      description: 'Описание Игры ПАЗЛОВ',
      link: 'https://jeckjonnyq.github.io/Burger-Landing/',
      photo: BurgerLanding,
      year: '2023',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
  ],
];
