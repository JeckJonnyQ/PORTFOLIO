import { ReactElement } from 'react';
import './SectionPortfolio.scss';

import BasicTabs from './Tabs/Tabs';

function SectionPortfolio(): ReactElement {
  return (
    <div className="portfolio">
      <div className="container">
        <h2 className="portfolio__title">Portfolio</h2>
        <p className="portfolio__desc">Explore My work</p>
        <p className="portfolio__info">Some of the noteworthy projects I have built:</p>

        <BasicTabs />
      </div>
    </div>
  );
}

export default SectionPortfolio;
