import { Box, TextField, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {
  CentredContainer500W,
  DataVisualizeControl,
  ListItem,
} from "./UIItems";
import { ROOT } from "../../routes";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";

interface DataListLayoutProps {
  inputValue: string | number;
  setInputValue: (inp: string) => void;
  firstButtonHandler: () => void;
  secondButtonHandler: () => void;
  firstButtonName: string;
  secondButtonName: string;
  dataList: (string | number)[];
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
          >
            {firstButtonName}
          </DataVisualizeControl>
          <DataVisualizeControl
            variant="contained"
            onClick={secondButtonHandler}
          >
            {secondButtonName}
          </DataVisualizeControl>
        </Box>
      </Box>
      <Stack>
        {dataList.map((item) => (
          <ListItem key={v4()}>{item}</ListItem>
        ))}
      </Stack>
      <Link to={ROOT}>
        <DataVisualizeControl variant="contained">
          {t("buttons.back")}
        </DataVisualizeControl>
      </Link>
    </CentredContainer500W>
  );
}
