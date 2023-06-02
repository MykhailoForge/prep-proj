import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          buttons: {
            queue: "Queue",
            stack: "Stack",
            enqueue: "Enqueue",
            dequeue: "Dequeue",
            back: "Back",
            push: "Push",
            pop: "Pop",
          },
          headers: {
            hi: "HI",
          },
        },
      },
    },
  });

export default i18n;
