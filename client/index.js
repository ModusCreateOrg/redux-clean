import ReactDOM from 'react-dom';
import React from 'react';


ReactDOM.render(
  <div>
  </div>,
  document.getElementById('root')
);


// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import thunk from 'redux-thunk';

// combineReducers({
//   reducer1, reducer2
// });

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(rootReducer);

// export const ADD_TRANSACTION = 'ADD_TRANSACTION';

// function createTransaction(transaction) {
//   return {
//     type: ADD_TRANSACTION,
//     transaction
//   };
// }

// function mapStateToProps(state) {
//   const { transactions } = state;
//   return {
//     transactions: transactions.transactions,
//     summary: transactions.summary,
//     gridFields: transactions.transactionsGrid
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(AppActions, dispatch)
//   };
// }

// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
