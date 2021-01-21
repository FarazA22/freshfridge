import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './redux/reducers/reducersIndex';
import { loadMarkets } from './redux/actions/actions';



const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.dispatch(loadMarkets());

export default store;