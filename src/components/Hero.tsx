import { motion } from "framer-motion";
import { Code2, Cpu, Database, MapPin, Rocket, UserCheck } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { socialLinks } from "../data/socials";

const heroBadges = [
  { labelKey: "hero.badges.location", icon: MapPin },
  { labelKey: "hero.badges.graduate", icon: UserCheck },
  { labelKey: "hero.badges.projects", icon: Rocket },
];

const focusAreaIcons = [Code2, Cpu, Database];

export function Hero() {
  const { t } = useTranslation();
  const [photoLoaded, setPhotoLoaded] = useState(true);
  const stats = t("hero.stats", { returnObjects: true }) as { label: string; value: string }[];
  const focusAreas = t("hero.focusAreas", { returnObjects: true }) as string[];

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100dvh-2rem)] scroll-mt-24 items-center overflow-hidden bg-canvas py-16 sm:py-20 lg:py-20"
    >
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(380px,480px)] lg:gap-10 lg:px-8 xl:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-w-0 max-w-4xl"
        >
          <h1 className="max-w-4xl text-[2.4rem] font-bold leading-[0.98] tracking-[-0.04em] text-text-primary sm:text-[clamp(3.25rem,5vw,5rem)]">
            Rabia Nur Akdaş
          </h1>
          <p className="mt-4 text-xl font-semibold leading-7 tracking-[-0.025em] text-navy sm:text-2xl">
            {t("hero.role")}
          </p>
          <p className="mt-4 max-w-[58ch] text-sm leading-7 text-text-tertiary sm:text-base">
            {t("hero.intro")}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {heroBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <span
                  key={badge.labelKey}
                  className="badge transition duration-200 ease-out hover:border-brand/40 hover:bg-brand-hover"
                >
                  <Icon className="size-3.5 text-brand-link" aria-hidden="true" />
                  {t(badge.labelKey)}
                </span>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="button-primary w-full sm:w-auto">
              <Code2 className="size-4" aria-hidden="true" />
              {t("hero.primaryCta")}
            </a>
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="button-secondary w-full sm:w-auto"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {item.label}
                </a>
              );
            })}
            <a href="#contact" className="button-secondary w-full sm:w-auto">
              {t("hero.contactCta")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full min-w-0 max-w-[30rem] lg:justify-self-end"
        >
          <div className="panel-strong overflow-hidden border-navy/25 p-3 shadow-high sm:p-4">
            <div className="relative aspect-[8/9] overflow-hidden rounded-panel border border-navy/20 bg-bg-level-2 shadow-medium">
              <span className="absolute right-3 top-3 z-10 whitespace-nowrap rounded-full border border-brand-link/15 bg-white/90 px-2.5 py-1 text-xs font-semibold text-navy shadow-tiny backdrop-blur-sm sm:right-4 sm:top-4">
                {t("hero.availability")}
              </span>
              {photoLoaded ? (
                <img
                  src="/Rabia_Nur_Akdas_Photo.jpg"
                  alt={t("hero.photoAlt")}
                  width={1440}
                  height={1440}
                  onError={() => setPhotoLoaded(false)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <p className="max-w-56 text-sm font-medium leading-6 text-text-tertiary">
                    {t("hero.photoFallback")}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex min-h-[82px] min-w-0 flex-col items-center justify-center rounded-control border border-border-primary bg-bg-level-2/80 px-3 py-4 text-center"
                >
                  <p className="text-xs font-medium text-text-quaternary">{label}</p>
                  <p className="mt-1 text-base font-semibold leading-tight text-text-primary lg:text-lg xl:text-xl">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-panel border border-border-primary bg-bg-level-2 p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-quaternary">{t("hero.focusTitle")}</p>
              </div>
              <div className="grid gap-2.5">
                {focusAreas.map((label, index) => {
                  const Icon = focusAreaIcons[index] ?? Code2;
                  return (
                  <div key={label} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Icon className="size-4 text-brand-link" aria-hidden="true" />
                    {label}
                  </div>
                );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
