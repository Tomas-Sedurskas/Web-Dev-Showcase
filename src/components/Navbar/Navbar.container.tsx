import React, { VFC } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar: VFC = () => {
  const className = 'navbar';

  return (
    <nav className={className}>
      <ul className={`${className}_list`}>
        <li className={`${className}_list-item`}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sorting-algorithm">Sorting Algorithm</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
