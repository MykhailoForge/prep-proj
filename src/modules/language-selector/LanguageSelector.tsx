import Box from "@mui/material/Box";
import { useAppSelector } from "../core/store/store";
import {
  languageArrSelector,
  selectedLanguageSelector,
} from "../core/store/coreSlice";

import { MenuItem, TextField } from "@mui/material";

interface LanguageSelectorProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LanguageSelector = ({ changeHandler }: LanguageSelectorProps) => {
  const languageArr = useAppSelector(languageArrSelector);
  const selectedLanguage = useAppSelector(selectedLanguageSelector);

  return (
    <Box sx={{ maxWidth: 120 }}>
      <TextField
        select
        inputProps={{ "data-testid": "select" }}
        onChange={changeHandler}
        fullWidth
        value={selectedLanguage}
      >
        {languageArr.map((langItem) => (
          <MenuItem value={langItem.item} key={langItem.id}>
            {langItem.item}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};
