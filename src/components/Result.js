import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Result ({won, turn, draw}) {
  let result = ''; 
  if (turn) {
    result = `It's ${turn.toUpperCase()}'s turn.`;
  }
  if (won) {
    result = `Yay! ${won.toUpperCase()} won!`
  } else if (draw) {
    result = 'We have a draw!';
  }
  return (
    <div>
      <p>
        {result}
      </p>
    </div>
  );
}

Result.propTypes = {
  won: PropTypes.string,
  turn: PropTypes.string.isRequired,
  draw: PropTypes.bool.isRequired
};
