import { motion } from "framer-motion";
import { BrainCircuit, Code2, Database, Layers3, Server, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SiCss,
  SiDart,
  SiDotnet,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiSqlite,
  SiSharp,
  SiSwagger,
  SiTypescript,
} from "react-icons/si";
import {
  TbApi,
  TbBrandVisualStudio,
  TbBrandVscode,
  TbDatabaseCog,
} from "react-icons/tb";
import type { IconType } from "react-icons";
import { useTranslation } from "react-i18next";
import { skills } from "../data/skills";
import { Section } from "./Section";

const iconMap = {
  backend: Server,
  frontend: Code2,
  mobile: Layers3,
  database: Database,
  tools: Wrench,
  other: BrainCircuit,
};

type SkillIcon = IconType | LucideIcon;

const chipIcons: Record<string, SkillIcon> = {
  "C#": SiSharp,
  "ASP.NET Core": SiDotnet,
  "Entity Framework Core": SiDotnet,
  "REST API": TbApi,
  PHP: SiPhp,
  Laravel: SiLaravel,
  React: SiReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss,
  Flutter: SiFlutter,
  Dart: SiDart,
  "React Native": SiReact,
  "SQL Server": TbDatabaseCog,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  Git: SiGit,
  GitHub: SiGithub,
  "Visual Studio": TbBrandVisualStudio,
  "VS Code": TbBrandVscode,
  Postman: SiPostman,
  Swagger: SiSwagger,
  Python: SiPython,
  "Artificial Intelligence": BrainCircuit,
  "Computer Vision": Code2,
};

export function Skills() {
  const { t } = useTranslation();

  return (
    <Section
      id="skills"
      eyebrow={t("skills.eyebrow")}
      title={t("skills.title")}
      description={t("skills.description")}
      compact
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, index) => {
          const Icon = iconMap[group.id] ?? Layers3;
          return (
            <motion.article
              key={group.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="panel group flex h-full flex-col p-5 transition duration-200 ease-out hover:border-brand-link/40 hover:shadow-medium"
            >
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-control border border-brand-link/20 bg-brand-hover text-brand-link transition duration-200 ease-out group-hover:border-brand-link/40 group-hover:text-brand-strong">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-normal text-text-primary">{t(group.titleKey)}</h3>
                  <p className="mt-1 text-sm leading-6 text-text-tertiary">{t(group.descriptionKey)}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const label = item.labelKey ? t(item.labelKey) : item.label;
                  const ChipIcon = chipIcons[item.iconKey ?? item.label];
                  return (
                    <motion.span
                      key={item.label}
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 380, damping: 24 }}
                      className="inline-flex min-h-8 max-w-full items-center gap-2 rounded-full border border-border-primary bg-bg-level-1 px-3 py-1.5 text-sm font-medium text-text-secondary transition duration-200 ease-out hover:border-brand-link/40 hover:text-brand-link"
                    >
                      {ChipIcon ? <ChipIcon className="size-4 shrink-0 text-brand-link" aria-hidden="true" /> : null}
                      <span className="truncate">{label}</span>
                    </motion.span>
                  );
                })}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
