import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";

// Load JSON files
import en from "./en.json";
import hi from "./hi.json";
import fr from "./fr.json";

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  fr: { translation: fr },
};

const deviceLanguage =
  RNLocalize.getLocales()[0]?.languageCode || "en";

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v4",
    resources,
    lng: deviceLanguage,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
