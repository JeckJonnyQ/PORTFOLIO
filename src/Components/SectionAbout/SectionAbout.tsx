import { ReactElement } from 'react';
import './SectionAbout.scss';
import AuthorPhoto from '../../assets/images/Vladislav.png';

import { contactInfo, aboutInfo, contactData } from '../../helpers/staticDataAbout';

function SectionAbout(): ReactElement {
  return (
    <div className="about" id="about-me">
      <div className="container">
        <h2 className="about__title">About</h2>
        {aboutInfo.map((item) => (
          <p key={item.id} className={item.className}>
            {item.content}
          </p>
        ))}

        <div className="about-block">
          <div className="wrapper__photo">
            <img className="wrapper__photo_img" src={AuthorPhoto} alt="authorPhoto" />
          </div>

          <div className="wrapper__content">
            <h3 className="content_title">Introduction</h3>
            <p className="content_desc">{contactInfo.description}</p>
            <h3 className="content_title">Contact Information</h3>

            <div className="inner__contacts">
              {contactData.map((item) => (
                <div key={item.id} className={`inner__contacts_${item.classBlock}`}>
                  <h4 className={`contacts__${item.classTitle}`}>{item.title}</h4>
                  <a
                    className={`contacts__${item.classLink}`}
                    href={`${item.linkType}:${item.content}`}
                    target="_blank"
                  >
                    {item.content}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionAbout;
