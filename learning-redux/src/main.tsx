import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./Redux/productApi.tsx";
import { Provider } from "react-redux";
import { myStore } from "./Redux/Stores.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <ApiProvider api={productsApi}>
      <Provider store={myStore}>
        <App />
      </Provider>
    </ApiProvider>
  </>,
);
