import { combineReducers } from "redux";
import clientActions from "./clientActions";
import productActions from "./productAction";
import shoppingActions from "./shoppingActions";

const rootReducer = combineReducers({
  clientReducer: clientActions,
  productReducer: productActions,
  shoppingCartReducer: shoppingActions,
});

export default rootReducer;
