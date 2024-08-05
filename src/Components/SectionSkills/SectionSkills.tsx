import { ReactElement } from 'react';
import './SectionSkills.scss';

import { SkillsData } from '../../helpers/staticDataSkills';

function SectionSkills(): ReactElement {
  return (
    <div className="skills">
      <div className="container">
        <h2 className="skills__title">My Skills</h2>
        <p className="skills__desc">The skills, tools and technologies I am really good at:</p>

        <div className="skills__block">
          {SkillsData.map((item) => (
            <div className="skills__block-inner" key={item.id}>
              <img className="skills__block-inner_icon" src={item.content} alt={item.title} />
              <span className="skills__block-inner_title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionSkills;
