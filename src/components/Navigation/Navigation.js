import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return(
    <nav>
      <ul>
      <Link to='/'>
        <li>About</li>
      </Link>
      </ul>
    </nav>
  )
}

export default Navigation;
