import { ReactElement } from 'react';
import './SectionHome.scss';

import { linkPath } from '../../helpers/staticDataLinks';
import { SocialIcons } from '../../helpers/staticDataFooter';
import { gels, hexBricks } from '../../helpers/staticDataHome';

function SectionHome(): ReactElement {
  return (
    <div className="home" id="home">
      <div className="home-social">
        {SocialIcons.map((item) => (
          <a key={item.id} href={item.href} className="home-social__link" target="_blank">
            <img src={item.iconHome} alt={item.alt} className="home-social__link_icon" />
          </a>
        ))}
      </div>

      <div className="container">
        <div className="home__content">
          <h1 className="home__content_title">Vladislav Reut</h1>
          <p className="home__content_description">Front-end Developer</p>
          <a href={linkPath.linkPathToCV} target="_blank" className="home__content_link">
            Open my CV
          </a>
        </div>

        <div className="home__animation">
          <div className="socket">
            {gels.map((gelClass, index) => (
              <div key={index} className={`gel ${gelClass}`}>
                {hexBricks.map((brickClass, brickIndex) => (
                  <div key={brickIndex} className={`hex-brick ${brickClass}`}></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHome;
