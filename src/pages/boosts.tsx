import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../images/bald.png';

const Boosts = () => {
  return (
    <div>
      <h1>Boosts Page</h1>
      <p>This is the Boosts page.</p>
      <Link to="/" className="flex items-center gap-1">
        <img src={homeIcon} width={24} height={24} alt="Home" />
        <span>Go back to the main screen</span>
      </Link>
    </div>
  );
};

export default Boosts;
