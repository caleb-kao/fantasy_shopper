/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketsDisplay
 *
 * ************************************
 */

import React from 'react';
import MarketCreator from '../components/MarketCreator.jsx';
import MarketsDisplay from '../components/MarketsDisplay.jsx';

const MarketsContainer = () => {

  return (
    <div className="innerbox">
      <MarketCreator />
      <MarketsDisplay />
    </div>
  );
};

export default MarketsContainer;
