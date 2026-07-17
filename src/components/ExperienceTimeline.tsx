import { motion } from "framer-motion";
import { Building2, CalendarDays, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { experiences } from "../data/experiences";
import { Section } from "./Section";

export function ExperienceTimeline() {
  const { t } = useTranslation();

  return (
    <Section
      id="experience"
      eyebrow={t("experience.eyebrow")}
      title={t("experience.title")}
      description={t("experience.description")}
    >
      <div className="relative grid gap-5 lg:grid-cols-2">
        <div className="absolute left-11 top-0 h-full w-px bg-border-primary/70 lg:hidden" />
        {experiences.map((experience, index) => {
          const highlights = t(experience.highlightsKey, { returnObjects: true }) as string[];

          return (
          <motion.article
            key={`${experience.company}-${experience.id}`}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="panel group relative p-5 transition duration-200 ease-out hover:border-brand-link/40"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex gap-4">
                <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-control border border-brand-link/20 bg-brand-hover text-brand-link shadow-low transition duration-200 group-hover:text-brand-strong">
                  <Building2 className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-quaternary">{t("experience.position")}</p>
                  <h3 className="text-xl font-bold tracking-normal text-text-primary">{t(experience.roleKey)}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-text-quaternary">{t("experience.company")}</p>
                  <p className="mt-1 font-semibold text-brand-link">{experience.company}</p>
                </div>
              </div>
              <span className="badge badge-brand">
                {t("experience.badge")}
              </span>
            </div>

            <div className="mb-4 grid gap-3 text-sm text-text-tertiary sm:grid-cols-2">
              <span className="inline-flex items-center gap-2 rounded-control border border-border-primary bg-canvas px-3 py-2.5">
                <CalendarDays className="size-4 text-brand-link" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-text-secondary">{t("experience.date")}</span>
                  {t(experience.periodKey)}
                </span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-control border border-border-primary bg-canvas px-3 py-2.5">
                <MapPin className="size-4 text-brand-link" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-text-secondary">{t("experience.location")}</span>
                  {t(experience.locationKey)}
                </span>
              </span>
            </div>

            <div className="mb-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-text-quaternary">{t("experience.technologies")}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border-primary bg-bg-level-2 px-3 py-1.5 text-xs font-semibold text-text-secondary"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-text-quaternary">{t("experience.highlights")}</p>
              <ul className="space-y-2">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-text-tertiary">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-strong" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        );
        })}
      </div>
    </Section>
  );
}
