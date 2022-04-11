import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../sevices/coinRanking";
import { newsApi } from "../sevices/cryptoNews";


export default configureStore({
    reducer: {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [newsApi.reducerPath] : newsApi.reducer
    }
});