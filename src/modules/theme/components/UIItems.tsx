import { Box, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ListItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  margin: "10px 0px",
  color: theme.palette.text.secondary,
}));

export const DataVisualizeControl = styled(Button)(() => ({
  width: "76px",
}));

export const CentredContainer500W = styled(Box)(() => ({
  display: "flex",
  width: "500px",
  margin: "42px auto",
  justifyContent: "center",
  flexDirection: "column",
}));
