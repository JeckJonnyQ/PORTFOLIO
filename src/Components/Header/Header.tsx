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
      <nav className="nav">
        <ul className="nav__list">
          {links.map((item) => (
            <li className="nav__list_item" key={item.id}>
              <Link
                className="nav__list_item-link"
                to={item.path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
