import "normalize.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import {
  CentredContainer500W,
  DataVisualizeControl,
} from "../theme/components/UIItems";
import { QUEUE_VISUALIZER, STACK_VISUALIZER } from "../core/routes";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <CentredContainer500W minHeight={500} alignItems={"center"}>
      <Typography data-testid="app-typograpghy-greetings">
        {t("app.typography.hi")}
      </Typography>
      <Link to={STACK_VISUALIZER}>
        <DataVisualizeControl
          data-testid="stack-route-button"
          variant="contained"
        >
          {t("app.buttons.toStack")}
        </DataVisualizeControl>
      </Link>
      <Link to={QUEUE_VISUALIZER}>
        <DataVisualizeControl
          data-testid="queue-route-button"
          variant="contained"
        >
          {t("app.buttons.toQueue")}
        </DataVisualizeControl>
      </Link>
    </CentredContainer500W>
  );
}

export default App;
