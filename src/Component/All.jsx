import React from 'react';
import Fullstack from './Fullstack';
import Datascience from './Datascience';
import Cyber from './Cyber';

const All = () => {
  return (
    <div className="card-container-all">
      <div className="card-row">
        <Fullstack />
      </div>
      <div className="card-row">
        <Datascience />
      </div>
      <div className="card-row">
        <Cyber />
      </div>
    </div>
  );
};

export default All;
