/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

export const marketsSlice = createSlice({
  name: 'markets',
  initialState,
  reducers: {
    addMarket: (state, action) => {
      ++state.totalMarkets;
      state.marketList.push({
        marketId: ++state.lastMarketId,
        location: action.payload,
        cards: 0,
        '% of Total': 0
      });
    },
    addCard: (state, action) => {
      for (const market of state.marketList) {
        if (action.payload === market.marketId) {
          ++market.cards;
          ++state.totalCards;
        }
      }
      for (const market of state.marketList) {
        market['% of Total'] = `${Math.round(market.cards / state.totalCards * 100)}%`;
      }
    },
    deleteCard: (state, action) => {
      for (const market of state.marketList) {
        if (action.payload === market.marketId && market.cards > 0) {
          --market.cards;
          --state.totalCards;
        }
      }
      for (const market of state.marketList) {
        market['% of Total'] = `${Math.round(market.cards / state.totalCards * 100)}%`;
      }
    },
  },
});

export const { addMarket, addCard, deleteCard } = marketsSlice.actions;
export default marketsSlice.reducer;

// old non-toolkit code
// const marketsReducer = (state = initialState, action) => {
//   const marketList = state.marketList.slice();
//   let lastMarketId;
//   let totalMarkets;
//   let newLocation;
//   let totalCards = state.totalCards;

//   switch (action.type) {
//     case types.ADD_MARKET:
//       // increment lastMarketId and totalMarkets counters
//       lastMarketId = ++state.lastMarketId;
//       totalMarkets = ++state.totalMarkets;
//       // create the new market object from provided data

//       newLocation = action.payload;
//       // eslint-disable-next-line no-case-declarations
//       const newMarket = {
//         // what goes in here?
//         marketId: lastMarketId,
//         location: newLocation,
//         cards: 0,
//         '% of Total': 0
//       };

//       // push the new market onto a copy of the market list
//       marketList.push(newMarket);

//       // return updated state
//       return {
//         ...state,
//         marketList,
//         lastMarketId,
//         totalMarkets,
//         newLocation
//       };

//     case types.ADD_CARD:
//       for (const market of state.marketList) {
//         if (action.payload === market.marketId) {
//           ++market.cards;
//           ++totalCards;
//         }
//       }

//       for (const market of state.marketList) {
//         market['% of Total'] = `${Math.round(market.cards / totalCards * 100)}%`
//       }

//       return {
//         ...state,
//         marketList,
//         totalCards
//       };

//     case types.DELETE_CARD:
//       for (const market of state.marketList) {
//         if (action.payload === market.marketId && market.cards > 0) {
//           --market.cards;
//           --totalCards;
//         }
//       }

//       for (const market of state.marketList) {
//         market['% of Total'] = `${Math.round(market.cards / totalCards * 100)}%`
//       }

//       return {
//         ...state,
//         marketList,
//         totalCards
//       };

//     default: {
//       return state;
//     }
//   }
// };

// export default marketsReducer;