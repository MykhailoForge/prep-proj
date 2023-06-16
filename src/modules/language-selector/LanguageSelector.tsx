import Box from "@mui/material/Box";
import { useAppSelector } from "modules/core/store/store";
import { selectedLanguageSelector } from "modules/core/store/coreSlice";
import { MenuItem, TextField } from "@mui/material";
import { languageArrItem } from "modules/language-selector/languageSelectorModels";

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
