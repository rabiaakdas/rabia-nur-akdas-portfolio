import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/common.json";
import tr from "./tr/common.json";

const STORAGE_KEY = "portfolio-language";
const supportedLanguages = ["tr", "en"] as const;
type SupportedLanguage = (typeof supportedLanguages)[number];

function normalizeLanguage(language?: string | null): SupportedLanguage | null {
  const shortLanguage = language?.slice(0, 2).toLowerCase();
  return supportedLanguages.includes(shortLanguage as SupportedLanguage)
    ? (shortLanguage as SupportedLanguage)
    : null;
}

function getInitialLanguage(): SupportedLanguage {
  if (typeof window === "undefined") {
    return "tr";
  }

  const savedLanguage = normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
  if (savedLanguage) {
    return savedLanguage;
  }

  return normalizeLanguage(window.navigator.language) ?? "tr";
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      tr: { common: tr },
      en: { common: en },
    },
    lng: getInitialLanguage(),
    fallbackLng: "tr",
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (language) => {
  const normalizedLanguage = normalizeLanguage(language);
  if (normalizedLanguage && typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, normalizedLanguage);
    document.documentElement.lang = normalizedLanguage;
  }
});

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language;
}

export default i18n;
