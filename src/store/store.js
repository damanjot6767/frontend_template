import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk";
import { rootReducer } from "../Reducers";
import { wishlist } from "./wishlist";

const persistConfig = {
    timeout:90000,
    wishlist,
    key:"store",
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = createStore(persistedReducer,applyMiddleware(thunk));

export const persistedStore = persistStore(store);
