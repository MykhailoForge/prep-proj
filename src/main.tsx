import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StackVisualizer } from "./pages/StackVisualizer/StackVisualizer.tsx";
import { QueueVisualizer } from "./pages/QueueVisualizer/QueueVisualizer.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { QUEUE_VISUALIZER, ROOT, STACK_VISUALIZER } from "./routes.ts";
import "./translation/i18n.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={ROOT} element={<App />} />
          <Route path={STACK_VISUALIZER} element={<StackVisualizer />} />
          <Route path={QUEUE_VISUALIZER} element={<QueueVisualizer />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
