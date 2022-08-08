import axios from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { api } from "./config";
import { themeReducer } from "./features/theme/theme-slice";
import { controlsReducer } from "./features/controls/controls-slice";
import { countriesReducer } from "./features/countries/countries-slice";
import { singleCountryReducer } from "./features/single-country/single-country-slice";
import { 
    persistStore, persistReducer,
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
 } from 'redux-persist';
 import storage from "redux-persist/lib/storage";

 const persistConfig =
 {
     key: "root",
     storage,
     blacklist: ["countries"]     
 };

 const rootReducer = combineReducers(
{
    theme: themeReducer,
    controls: controlsReducer,
    countries: countriesReducer,
    singleCountry: singleCountryReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore(
{
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefault => getDefault(
    {
        thunk:
        {
            extraArgument: { client: axios, api }
        },
        serializableCheck:
        {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

const persistor = persistStore(store);

export { store, persistor };