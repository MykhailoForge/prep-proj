import "normalize.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import {
  CentredContainer500W,
  DataVisualizeControl,
} from "./components/UI/UIItems";
import { QUEUE_VISUALIZER, STACK_VISUALIZER } from "./routes";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <CentredContainer500W minHeight={500} alignItems={"center"}>
      <Typography>{t("headers.hi")}</Typography>
      <Link to={STACK_VISUALIZER}>
        <DataVisualizeControl variant="contained">
          {t("buttonText.stack")}
        </DataVisualizeControl>
      </Link>
      <Link to={QUEUE_VISUALIZER}>
        <DataVisualizeControl variant="contained">
          {t("buttonText.queue")}
        </DataVisualizeControl>
      </Link>
    </CentredContainer500W>
  );
}

export default App;
