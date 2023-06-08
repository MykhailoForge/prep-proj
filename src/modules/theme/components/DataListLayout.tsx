import { Box, TextField, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {
  CentredContainer500W,
  DataVisualizeControl,
  ListItem,
} from "./UIItems";
import { ROOT } from "../../core/routes";
import { useTranslation } from "react-i18next";
import { stackArrayItem } from "../../stack-visualizer/stackVisualizerModels";
import { queueArrayItem } from "../../queue-visualizer/queueVisualizerModels";

interface DataListLayoutProps {
  inputValue: string;
  setInputValue: (inp: string) => void;
  firstButtonHandler: () => void;
  secondButtonHandler: () => void;
  firstButtonName: string;
  secondButtonName: string;
  dataList: stackArrayItem[] | queueArrayItem[];
}

export default function DataListLayout({
  inputValue,
  setInputValue,
  firstButtonName,
  secondButtonName,
  firstButtonHandler,
  secondButtonHandler,
  dataList,
}: DataListLayoutProps) {
  const { t } = useTranslation();

  return (
    <CentredContainer500W>
      <Box
        margin="20px auto"
        justifyContent="space-between"
        width="80%"
        display="flex"
      >
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          inputProps={{ "data-testid": "data-list-text-input" }}
        />
        <Box
          width={180}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginLeft="12px"
        >
          <DataVisualizeControl
            variant="contained"
            onClick={firstButtonHandler}
            data-testid="data-list-add-button"
          >
            {firstButtonName}
          </DataVisualizeControl>
          <DataVisualizeControl
            variant="contained"
            onClick={secondButtonHandler}
            data-testid="data-list-remove-button"
          >
            {secondButtonName}
          </DataVisualizeControl>
        </Box>
      </Box>
      <Stack data-testid="data-list-items-container">
        {dataList.map((elem) => (
          <ListItem key={elem.id}>{elem.item}</ListItem>
        ))}
      </Stack>
      <Link to={ROOT}>
        <DataVisualizeControl
          variant="contained"
          data-testid="data-list-back-button"
        >
          {t("dataListLayout.buttons.back")}
        </DataVisualizeControl>
      </Link>
    </CentredContainer500W>
  );
}
