import { ReactElement } from 'react';
import './SectionPortfolio.scss';

import BasicTabs from './Tabs/Tabs';
import { linkPath } from '../../helpers/staticDataLinks';

function SectionPortfolio(): ReactElement {
  return (
    <div className="portfolio">
      <div className="container">
        <h2 className="portfolio__title">Portfolio</h2>
        <p className="portfolio__desc">Explore My work</p>
        <p className="portfolio__info">Some of the noteworthy projects I have built:</p>

        <BasicTabs />

        <div className="portfolio__wrapper">
          <a href={linkPath.linkPathToCV} target="_blank" className="portfolio__wrapper_link">
            View All Works
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionPortfolio;
