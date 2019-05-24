import React, { Component, useReducer } from 'react';
import PropTypes from 'prop-types';
import BlankSymbol from './BlankSymbol';
import Result from './Result';
import XSymbol from './XSymbol';
import OSymbol from './OSymbol';
import { X, O } from '../symbols/symbols';
import { initialState, gameReducer } from '../reducers/gameReducer';

const Board = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const addSymbol = (row, position, symbol) => {
    
    !state.won && dispatch({
      type: 'ADD_SYMBOL',
      symbol,
      row,
      position 
    });
  }

  const getSymbol = (rowIndex, position, symbol) => {
    if (symbol === X) {
      return <XSymbol key={position} position={position} />;
    }
    if (symbol === O) {
      return <OSymbol key={position} position={position} />;
    }
    return <BlankSymbol key={position} addSymbol={() => addSymbol(rowIndex, position, state.turn)} turn={state.turn} />;
  }

  const wonClass   = state.won ? ` won-${state.wonLine}` : '';
  const drawClass  = state.draw ? ' draw' : '';
  const boardClass = 'board' + wonClass + drawClass;

  return (
    <div>
      <Result won={state.won} turn={state.turn} draw={state.draw}/>
      <div className={boardClass}>
        {
          Object.keys(state.board)
            .map(rowIndex => {
              return (
                <div className={`row row${rowIndex}`} key={rowIndex}>
                  {
                    state.board[rowIndex].map((symbol, positon) => {
                      return getSymbol(rowIndex, positon, symbol);
                    })
                  }
                </div>
              );
            })
        }
        {
          state.won || state.draw ?
          <p className="startAgain" onClick={() => dispatch({ type: 'START_AGAIN' })}>
            Click to start again!
          </p> : false
        }
      </div>
    </div>
  );
}

export default Board