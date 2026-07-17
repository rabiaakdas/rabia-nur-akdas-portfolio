import { motion } from "framer-motion";
import { Code2, Database, Layers3, Server } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";

const strengths = [
  {
    titleKey: "about.strengths.web.title",
    descriptionKey: "about.strengths.web.description",
    icon: Server,
  },
  {
    titleKey: "about.strengths.mobile.title",
    descriptionKey: "about.strengths.mobile.description",
    icon: Layers3,
  },
  {
    titleKey: "about.strengths.data.title",
    descriptionKey: "about.strengths.data.description",
    icon: Database,
  },
  {
    titleKey: "about.strengths.learning.title",
    descriptionKey: "about.strengths.learning.description",
    icon: Code2,
  },
];

export function About() {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];

  return (
    <Section
      id="about"
      eyebrow={t("about.eyebrow")}
      title={t("about.title")}
      description={t("about.description")}
      align="left"
    >
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42 }}
          className="panel p-6 lg:p-7"
        >
          {paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={`${index === 0 ? "" : "mt-4"} text-base leading-8 ${index === 0 ? "text-text-secondary" : "text-text-tertiary"}`}>
              {paragraph}
            </p>
          ))}
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.titleKey}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
                className="panel group p-5 transition duration-200 ease-out hover:border-brand-link/40 hover:shadow-medium"
              >
                <span className="grid size-10 place-items-center rounded-control bg-brand-hover text-navy transition duration-200 group-hover:text-brand-strong">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-text-primary">{t(item.titleKey)}</h3>
                <p className="mt-2 text-sm leading-6 text-text-tertiary">{t(item.descriptionKey)}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
