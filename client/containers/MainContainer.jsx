/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React from 'react';
import { useSelector } from 'react-redux';
// import from child components...
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import MarketsContainer from './MarketsContainer.jsx';

const MainContainer = () => {
  // add pertinent state here
  const totalCards = useSelector(state => state.markets.totalCards);
  const totalMarkets = useSelector(state => state.markets.totalMarkets);

  return (
    <div className="container">
      <div className="outerBox">
        <h1 id="header">MegaMarket Loyalty Cards</h1>
        { /* Start adding components here... */}
        <TotalsDisplay totalCards={totalCards} totalMarkets={totalMarkets} />
        <MarketsContainer />
      </div>
    </div>
  );
};

export default MainContainer;
