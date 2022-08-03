import {legacy_createStore,applyMiddleware, combineReducers,compose}  from "redux"
import { reducer as AppReducer} from "./AppReducer/reducer"
import thunk from "redux-thunk"
import {reducer as AuthReducer} from "./AuthReducer/reducer"

const rootReducer =combineReducers({AppReducer,AuthReducer})

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export {store}