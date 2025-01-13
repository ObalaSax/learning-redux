import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import { Provider } from "react-redux";
import { DataApi } from "./Features/DataApi.ts";
import { myStore } from "./Features/MainStore.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <ApiProvider api={DataApi}>
      <Provider store={myStore}>
        <App />
      </Provider>
    </ApiProvider>
  </>,
);
