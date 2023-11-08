import React from 'react';
import { Link } from 'react-router-dom';

import EmployeeSearchScreen from '../components/EmployeeSearchScreen';

const EmployeeSearchPage: React.FC = () => {
  return (
    <div>
      <h2></h2>
      <EmployeeSearchScreen />
      <div className="button-container">
        <Link to="/">
          <button className="button">Go to the Home Page</button>
        </Link>
        <Link to="/registration">
          <button className="button">Go to Employee Records</button>
        </Link>
      </div>
    </div>
  );
  
};


export default EmployeeSearchPage;
