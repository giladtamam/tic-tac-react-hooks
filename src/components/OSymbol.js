import React from 'react';
import PropTypes from 'prop-types';
import { Symbol } from './BlankSymbol';

const OSymbol = ({ position }) => {
  return (
    <Symbol className={`symbol column${position}`}>
      <svg viewBox="0 0 56 56">
        <circle cx={28} cy={28} r={25} stroke="black" strokeWidth="2" fill="none" />
      </svg>
    </Symbol>
  );
};

OSymbol.propTypes = {
  position: PropTypes.number.isRequired
};

export default OSymbol;
