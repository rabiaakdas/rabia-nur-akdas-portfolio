import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const navItems = [
  { labelKey: "nav.items.about", href: "#about" },
  { labelKey: "nav.items.projects", href: "#projects" },
  { labelKey: "nav.items.skills", href: "#skills" },
  { labelKey: "nav.items.experience", href: "#experience" },
  { labelKey: "nav.items.contact", href: "#contact" },
];

export function Navbar() {
  const { i18n, t } = useTranslation();
  const [activeHref, setActiveHref] = useState(navItems[0].href);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const clickLockTimeoutRef = useRef<number | null>(null);
  const isClickLockedRef = useRef(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      if (isClickLockedRef.current) {
        return;
      }

      const isNearPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20;

      if (isNearPageBottom) {
        setActiveHref("#contact");
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      const visibleSections = sections
        .map((section) => {
          const rect = section.getBoundingClientRect();
          return {
            section,
            distance: Math.abs(rect.top + rect.height / 2 - viewportCenter),
            isVisible: rect.bottom > 0 && rect.top < window.innerHeight,
          };
        })
        .filter((item) => item.isVisible)
        .sort((a, b) => a.distance - b.distance);

      const currentSection = visibleSections[0]?.section;

      if (currentSection) {
        setActiveHref(`#${currentSection.id}`);
      }
    };

    const observer = new IntersectionObserver(
      () => updateActiveSection(),
      { rootMargin: "-25% 0px -60% 0px", threshold: 0.2 },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      if (clickLockTimeoutRef.current) {
        window.clearTimeout(clickLockTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    isClickLockedRef.current = true;
    if (clickLockTimeoutRef.current) {
      window.clearTimeout(clickLockTimeoutRef.current);
    }
    setActiveHref(href);
    setIsMenuOpen(false);
    clickLockTimeoutRef.current = window.setTimeout(() => {
      isClickLockedRef.current = false;
      clickLockTimeoutRef.current = null;
    }, 650);
  };

  const getNavLinkClassName = (href: string) =>
    `relative rounded-full px-3 py-1.5 transition duration-200 ease-out after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-center after:bg-brand-link after:transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-strong ${
      activeHref === href
        ? "text-navy after:scale-x-100 hover:bg-brand-hover/70"
        : "text-text-tertiary after:scale-x-0 hover:bg-brand-hover hover:text-brand-link hover:after:scale-x-100"
    }`;

  const activeLanguage = i18n.resolvedLanguage ?? i18n.language;
  const changeLanguage = (language: "tr" | "en") => {
    void i18n.changeLanguage(language);
  };

  const languageButtonClassName = (language: "tr" | "en") =>
    `rounded-full px-2 py-1 text-xs font-semibold transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-strong ${
      activeLanguage.startsWith(language)
        ? "bg-brand-hover text-navy"
        : "text-text-tertiary hover:bg-brand-hover hover:text-brand-link"
    }`;

  const languageSwitcher = (
    <div
      className="inline-flex items-center rounded-full border border-border-primary bg-white/88 p-1 shadow-low"
      aria-label={t("nav.languageLabel")}
    >
      <button type="button" className={languageButtonClassName("tr")} onClick={() => changeLanguage("tr")}>
        TR
      </button>
      <span className="px-0.5 text-xs text-text-quaternary" aria-hidden="true">
        |
      </span>
      <button type="button" className={languageButtonClassName("en")} onClick={() => changeLanguage("en")}>
        EN
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border-primary bg-white/88 backdrop-blur-md">
      <nav className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="grid size-10 justify-self-start place-items-center rounded-full border border-brand-link/20 bg-brand-hover text-sm font-semibold text-navy shadow-low transition duration-200 ease-out hover:-translate-y-px hover:border-brand-link/35 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-strong active:translate-y-0"
          aria-label={t("nav.home")}
        >
          RA
        </a>

        <div className="hidden items-center justify-self-center rounded-full border border-border-primary bg-white/88 p-1 text-[13px] font-medium text-text-tertiary shadow-low lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              aria-current={activeHref === item.href ? "page" : undefined}
              className={getNavLinkClassName(item.href)}
            >
              {t(item.labelKey)}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-self-end gap-2">
          {languageSwitcher}
          <button
            type="button"
            className="icon-button lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-strong"
            aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div
          id="mobile-nav-menu"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border-primary bg-white/95 px-5 py-3 shadow-low lg:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                aria-current={activeHref === item.href ? "page" : undefined}
                className={`${getNavLinkClassName(item.href)} px-4 py-2.5 after:inset-x-4 after:bottom-2`}
              >
                {t(item.labelKey)}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
