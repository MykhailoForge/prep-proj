import { Route, Routes } from "react-router-dom";
import { StackVisualizer } from "../stack-visualizer/StackVisualizer.tsx";
import { QueueVisualizer } from "../queue-visualizer/QueueVisualizer.tsx";
import { QUEUE_VISUALIZER, ROOT, STACK_VISUALIZER } from "./routes.ts";
import App from "./App.tsx";
import { Box } from "@mui/material";
import { LanguageSelector } from "../language-selector/LanguageSelector.tsx";

function AppRouter() {
  return (
    <Box>
      <LanguageSelector />
      <Routes>
        <Route path={ROOT} element={<App />} />
        <Route path={STACK_VISUALIZER} element={<StackVisualizer />} />
        <Route path={QUEUE_VISUALIZER} element={<QueueVisualizer />} />
      </Routes>
    </Box>
  );
}

export default AppRouter;
