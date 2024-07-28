import { configureStore } from "@reduxjs/toolkit";
import DataSlice from './index'
import {persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig =  { key: "root7",storage,version:1}
 const persistedReducer = persistReducer(persistConfig,DataSlice)
const store = configureStore({
  reducer: {
    data: persistedReducer,
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER ]
        }
    })
});

export default store;
