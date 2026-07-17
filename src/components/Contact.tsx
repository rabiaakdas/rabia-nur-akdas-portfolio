import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { contactItems, socialLinks } from "../data/socials";
import { Section } from "./Section";

export function Contact() {
  const { t } = useTranslation();

  return (
    <Section
      id="contact"
      eyebrow={t("contact.eyebrow")}
      title={t("contact.title")}
      description={t("contact.description")}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
        className="panel-strong relative overflow-hidden p-6 text-center transition duration-200 ease-out hover:border-brand-link/40 lg:p-8"
      >
        <div className="relative mx-auto max-w-3xl">
          <span className="mx-auto mb-5 grid size-14 place-items-center rounded-control border border-brand/25 bg-brand/65 text-navy shadow-low">
            <Send className="size-6" aria-hidden="true" />
          </span>
          <h3 className="text-2xl font-bold tracking-normal text-text-primary sm:text-3xl">{t("contact.cardTitle")}</h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-tertiary">
            {t("contact.cardDescription")}
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:rabiaakdas00@gmail.com"
              className="button-primary px-6"
            >
              <Mail className="size-5" aria-hidden="true" />
              {t("contact.sendMail")}
            </a>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="icon-button size-11 text-2xl"
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.href}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="panel group p-4 transition duration-200 ease-out hover:border-brand-link/40"
            >
              <Icon className="mb-3 size-5 text-brand-link transition duration-200 group-hover:text-brand-strong" aria-hidden="true" />
              <p className="text-sm font-medium text-text-tertiary">{item.labelKey ? t(item.labelKey) : item.label}</p>
              <p className="mt-1 break-words text-sm font-semibold text-text-primary">{item.valueKey ? t(item.valueKey) : item.value}</p>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}
