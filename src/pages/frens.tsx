import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../images/bald.png';

const Frens = () => {
  return (
    <div>
      <h1>Frens Page</h1>
      <p>This is the Frens page.</p>
      <Link to="/" className="flex items-center gap-1">
        <img src={homeIcon} width={24} height={24} alt="Home" />
        <span>Go back to the main screen</span>
      </Link>
    </div>
  );
};

export default Frens;
