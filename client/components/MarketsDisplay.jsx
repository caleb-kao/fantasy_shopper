/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n Market components
 *
 * ************************************
 */

import React from 'react';
import Market from './Market.jsx';
import { useSelector } from 'react-redux';

const MarketsDisplay = props => {
  const marketList = useSelector(state => state.markets.marketList);

  function createMarketLoc() {
    if (marketList.length === 0) return;
    return (
      <div>
        {marketList.map((el, i) => {
          return <Market
            key={i}
            marketId={el.marketId}
            location={el.location}
            cards={el.cards}
            pctOfCards={el['% of Total']}
          />;
        })}
      </div>
    );
  }

  return (
    <div className="displayBox">
      <h4>Markets</h4>
      {createMarketLoc()}
    </div>
  );
};

export default MarketsDisplay;