const cvFiles = {
  tr: {
    href: "/cv/Rabia_Nur_Akdas_TR_CV.pdf",
    fileName: "Rabia_Nur_Akdas_TR_CV.pdf",
  },
  en: {
    href: "/cv/Rabia_Nur_Akdas_EN_CV.pdf",
    fileName: "Rabia_Nur_Akdas_EN_CV.pdf",
  },
} as const;

type CvLanguage = keyof typeof cvFiles;

function normalizeCvLanguage(language?: string): CvLanguage {
  return language?.startsWith("en") ? "en" : "tr";
}

export function getCvDownload(language?: string) {
  return cvFiles[normalizeCvLanguage(language)];
}
