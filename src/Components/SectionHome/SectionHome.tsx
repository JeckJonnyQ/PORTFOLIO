import { ReactElement } from 'react';
import './SectionHome.scss';

import { linkPath } from '../../helpers/staticDataLinks';

function SectionHome(): ReactElement {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="home__content">
          <h1 className="home__content_title">Vladislav Reut</h1>
          <p className="home__content_description">Front-end Developer</p>
          <a href={linkPath.linkPathToCV} target="_blank" className="home__content_link">
            Open my CV
          </a>
        </div>

        <div className="home__animation">
          <svg width="370" height="370">
            <circle r="8" cy="185" cx="185" className="dark"></circle>
            <circle r="16" cy="185" cx="185" className="dark"></circle>
            <circle r="32" cy="185" cx="185" className="dark"></circle>
            <circle r="48" cy="185" cx="185" className="dark"></circle>
            <circle r="64" cy="185" cx="185" className="dark"></circle>
            <circle r="80" cy="185" cx="185" className="dark"></circle>
            <circle r="96" cy="185" cx="185" className="dark"></circle>
            <circle r="112" cy="185" cx="185" className="dark"></circle>
            <circle r="128" cy="185" cx="185" className="dark"></circle>
            <circle r="144" cy="185" cx="185" className="dark"></circle>
            <circle r="160" cy="185" cx="185" className="dark"></circle>
            <circle r="176" cy="185" cx="185" className="dark"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SectionHome;
