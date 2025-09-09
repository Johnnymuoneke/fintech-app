import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import orbSlices from "./userSlice";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: 0
};

const persist_Reducer = persistReducer(persistConfig, orbSlices);

export const store = configureStore({
    reducer: { userState: persist_Reducer },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false })
})
export const persistor = persistStore(store)
export const getDispatch = () => {
    return store.dispatch
}