import { useTranslation } from "react-i18next";
import { socialLinks } from "../data/socials";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 border-t border-border-primary/55 bg-canvas px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center text-sm text-text-tertiary sm:flex-row sm:text-left">
        <p className="max-w-full">{t("footer.copyright")}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="icon-button"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
