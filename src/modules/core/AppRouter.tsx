import { Route, Routes } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { StackVisualizer } from "../stack-visualizer/StackVisualizer.tsx";
import { QueueVisualizer } from "../queue-visualizer/QueueVisualizer.tsx";
import { QUEUE_VISUALIZER, ROOT, STACK_VISUALIZER } from "./routes.ts";
import App from "./App.tsx";
import { Box } from "@mui/material";
import { LanguageSelector } from "../language-selector/LanguageSelector.tsx";
import { useAppDispatch, useAppSelector } from "./store/store.ts";
import {
  fetchLangList,
  languageArrSelector,
  setLocalization,
} from "./store/coreSlice.ts";
import { useTranslation } from "react-i18next";

function AppRouter() {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  const languageArr = useAppSelector(languageArrSelector);

  const handleFetchLanguage = useCallback(() => {
    dispatch(fetchLangList());
  }, [dispatch]);

  useEffect(() => {
    handleFetchLanguage();
  }, [handleFetchLanguage]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value;
    dispatch(setLocalization(language));
    i18n.changeLanguage(language);
  };

  return (
    <Box>
      <LanguageSelector
        changeHandler={handleLanguageChange}
        languageArr={languageArr}
      />
      <Routes>
        <Route path={ROOT} element={<App />} />
        <Route path={STACK_VISUALIZER} element={<StackVisualizer />} />
        <Route path={QUEUE_VISUALIZER} element={<QueueVisualizer />} />
      </Routes>
    </Box>
  );
}

export default AppRouter;
