import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  compact?: boolean;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, align = "center", compact = false, children }: SectionProps) {
  const { i18n } = useTranslation();
  const isLeft = align === "left";

  return (
    <section
      id={id}
      lang={i18n.resolvedLanguage ?? i18n.language}
      className={`section-band bg-canvas ${compact ? "py-14 sm:py-20 lg:py-28" : ""}`}
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className={`${isLeft ? "max-w-4xl text-left" : "mx-auto max-w-3xl text-center"} ${
            compact ? "mb-6" : "mb-9"
          }`}
        >
          {eyebrow ? (
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand-link">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className={`mt-4 text-base leading-7 text-text-tertiary ${isLeft ? "max-w-3xl" : ""}`}>
              {description}
            </p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
