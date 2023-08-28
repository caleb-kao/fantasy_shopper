/**
 * ************************************
 *
 * @module  Market
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { addCard, deleteCard } from '../reducers/marketsReducer.js';

const Market = props => {
  const dispatch = useDispatch();
  return (
    <div className="marketBox">
      <div>Market ID: {props.marketId}</div>
      <div>Location: {props.location}</div>
      <div>Cards: {props.cards}</div>
      <div>% of total: {props.pctOfCards}</div>
      <button onClick={() => dispatch(addCard(props.marketId))}>Add Card</button>
      <button onClick={() => dispatch(deleteCard(props.marketId))}>Delete Card</button>
    </div>
  );
};

export default Market;