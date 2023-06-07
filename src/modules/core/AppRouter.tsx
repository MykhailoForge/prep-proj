import { Route, Routes } from "react-router-dom";
import { StackVisualizer } from "../stack-visualizer/StackVisualizer.tsx";
import { QueueVisualizer } from "../queue-visualizer/QueueVisualizer.tsx";
import { QUEUE_VISUALIZER, ROOT, STACK_VISUALIZER } from "./routes.ts";
import App from "./App.tsx";
import { Box } from "@mui/material";
import { LanguageSelector } from "../language-selector/LanguageSelector.tsx";
import { useAppDispatch } from "./store/store.ts";
import { setLanguage } from "./store/coreSlice.ts";
import { useTranslation } from "react-i18next";

function AppRouter() {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLanguage(event.target.value));
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box>
      <LanguageSelector changeHandler={handleLanguageChange} />
      <Routes>
        <Route path={ROOT} element={<App />} />
        <Route path={STACK_VISUALIZER} element={<StackVisualizer />} />
        <Route path={QUEUE_VISUALIZER} element={<QueueVisualizer />} />
      </Routes>
    </Box>
  );
}

export default AppRouter;
