/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addMarket } from '../reducers/marketsReducer.js';

const MarketCreator = props => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  return (
    <>
      <h3>Create New Market</h3>
      <div>
        <label htmlFor="location">
          Location: <input
            ref={inputRef}
            type="text"
            id='location'
          />
        </label>
        <button onClick={() => dispatch(addMarket(inputRef.current.value))}>Add Market</button>
      </div>
    </>
  );
};



export default MarketCreator;