import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppSelector, useAppDispatch } from "../core/store/store";
import {
  languageArrSelector,
  selectedLanguageSelector,
  setLanguage,
} from "../core/store/coreSlice";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const languageArr = useAppSelector(languageArrSelector);
  const selectedLanguage = useAppSelector(selectedLanguageSelector);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    const langToSet = event.target.value as string;
    dispatch(setLanguage(langToSet));
    i18n.changeLanguage(langToSet);
  };

  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{t("languageSelector.labels.language")}</InputLabel>
        <Select
          value={selectedLanguage}
          label="selectedLanguage"
          onChange={handleChange}
        >
          {languageArr.map((langItem) => (
            <MenuItem value={langItem.item} key={langItem.id}>
              {langItem.item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
