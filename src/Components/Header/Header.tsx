import { ReactElement } from 'react';
import './Header.scss';

import { HeaderLinksProps } from '../../helpers/staticHeaderLinks';
import { Link } from 'react-scroll';

interface HeaderProps {
  links: HeaderLinksProps[];
}

export default function Header({ links }: HeaderProps): ReactElement {
  return (
    <div className="header">
      <nav className="navbar">
        <ul className="navbar__content">
          {links.map((item) => (
            <li className="navbar__content_link" key={item.id}>
              <Link to={item.path} spy={true} smooth={true} offset={-100} duration={500}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
