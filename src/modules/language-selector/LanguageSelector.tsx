import Box from "@mui/material/Box";
import { MenuItem, TextField } from "@mui/material";
import { selectedLanguageSelector } from "../core/store/coreSlice";
import { useAppSelector } from "../core/store/store";
import { languageArrItem } from "./languageSelectorModels";

interface LanguageSelectorProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  languageArr: languageArrItem[];
}

export const LanguageSelector = ({
  changeHandler,
  languageArr,
}: LanguageSelectorProps) => {
  const selectedLanguage = useAppSelector(selectedLanguageSelector);

  return (
    <Box sx={{ maxWidth: 120 }} data-testid="language-selector-container">
      <TextField
        select
        onChange={changeHandler}
        fullWidth
        value={selectedLanguage}
        inputProps={{ "data-testid": "language-selector-body" }}
      >
        {languageArr.map((langItem) => (
          <MenuItem
            value={langItem.item}
            key={langItem.id}
            data-testid={`language-selector-option-${langItem.item}`}
          >
            {langItem.item}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};
