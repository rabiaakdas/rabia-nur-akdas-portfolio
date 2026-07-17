import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Github, ImageIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import { Section } from "./Section";

const bookVerseScreens = {
  books: "/bookverse-books.png",
  home: "/bookverse-cover.png",
  profile: "/bookverse-profile.png",
};

const blogAppScreens = {
  login: "/blogapp-login.png",
  feed: "/blogapp-feed.png",
  detail: "/blogapp-detail.png",
};

const imageSizes: Record<string, { width: number; height: number }> = {
  "/blogapp-detail.png": { width: 387, height: 821 },
  "/blogapp-feed.png": { width: 386, height: 832 },
  "/blogapp-login.png": { width: 382, height: 830 },
  "/bookverse-books.png": { width: 407, height: 882 },
  "/bookverse-cover.png": { width: 852, height: 1846 },
  "/bookverse-profile.png": { width: 418, height: 887 },
  "/fullstack-ai-chat-cover.png": { width: 1440, height: 810 },
  "/library-management-cover.png": { width: 1298, height: 730 },
  "/petshopweb.png": { width: 1672, height: 941 },
  "/trafik-cover.png": { width: 1672, height: 941 },
};

type MobileProjectPreviewProps = {
  images: [string, string, string];
  title: string;
  theme: "bookverse" | "blogapp";
  alts: [string, string, string];
};

const mobilePreviewThemes = {
  bookverse:
    "border-sky-100 bg-[radial-gradient(circle_at_22%_20%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_30%),linear-gradient(135deg,#F8FBFF_0%,#E7F4FF_48%,#D8EAFB_100%)]",
  blogapp:
    "border-pink-100 bg-[radial-gradient(circle_at_22%_20%,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0)_30%),linear-gradient(135deg,#FFFFFF_0%,#F8ECFF_46%,#FFEAF3_100%)]",
};

function MobileProjectPreview({ images, title, theme, alts }: MobileProjectPreviewProps) {
  const [firstImage, centerImage, lastImage] = images;

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-[16px] border ${mobilePreviewThemes[theme]}`}>
      <div className="absolute left-[15%] top-1/2 z-[2] hidden max-w-[22%] -translate-y-1/2 -rotate-[8deg] shadow-[0_12px_20px_rgba(15,48,86,0.14)] sm:block">
        <img
          src={firstImage}
          alt={alts[0]}
          width={imageSizes[firstImage].width}
          height={imageSizes[firstImage].height}
          loading="lazy"
          decoding="async"
          className="h-auto w-auto max-w-full object-contain object-center"
        />
      </div>
      <div className="absolute right-[15%] top-1/2 z-[2] hidden max-w-[22%] -translate-y-1/2 rotate-[8deg] shadow-[0_12px_20px_rgba(15,48,86,0.14)] sm:block">
        <img
          src={lastImage}
          alt={alts[2]}
          width={imageSizes[lastImage].width}
          height={imageSizes[lastImage].height}
          loading="lazy"
          decoding="async"
          className="h-auto w-auto max-w-full object-contain object-center"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 z-[3] max-w-[26.32%] -translate-x-1/2 -translate-y-1/2 shadow-[0_14px_24px_rgba(15,48,86,0.16)]">
        <img
          src={centerImage}
          alt={`${title} ${alts[1]}`}
          width={imageSizes[centerImage].width}
          height={imageSizes[centerImage].height}
          loading="lazy"
          decoding="async"
          className="h-auto w-auto max-w-full object-contain object-center"
        />
      </div>
    </div>
  );
}

export function Projects() {
  const { t } = useTranslation();

  return (
    <Section
      id="projects"
      eyebrow={t("projects.eyebrow")}
      title={t("projects.title")}
      description={t("projects.description")}
      align="left"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const projectTitle = t(project.titleKey);
          const projectFeatures = t(project.featuresKey, { returnObjects: true }) as string[];
          const isLibraryManagement = project.id === "libraryManagement";
          const isFullStackAIChat = project.id === "fullStackAiChat";
          const isBookVerse = project.id === "bookVerse";
          const isBlogApp = project.id === "blogApp";
          const isTrafficProject = project.id === "trafficVehicle";
          const hasMobilePreview = isBookVerse || isBlogApp;
          const hasGithubUrl = Boolean(project.githubUrl);
          const hasProjectUrl = Boolean(project.projectUrl);
          const showsAllDetails = isLibraryManagement || isBookVerse;
          const visibleTechnologies = showsAllDetails ? project.technologies : project.technologies.slice(0, 6);
          const visibleFeatures = showsAllDetails ? projectFeatures : projectFeatures.slice(0, 4);

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              className={`panel group flex h-full min-h-[31rem] flex-col overflow-hidden p-3 transition duration-300 ease-out ${
                hasMobilePreview ? "project-card-static-hover" : "hover:border-brand-link/40 hover:shadow-medium"
              }`}
            >
              {isBookVerse ? (
                <MobileProjectPreview
                  images={[bookVerseScreens.books, bookVerseScreens.home, bookVerseScreens.profile]}
                  title={projectTitle}
                  theme="bookverse"
                  alts={[t("projects.screens.bookVerseBooks"), t("projects.screens.bookVerseHome"), t("projects.screens.bookVerseProfile")]}
                />
              ) : isBlogApp ? (
                <MobileProjectPreview
                  images={[blogAppScreens.login, blogAppScreens.feed, blogAppScreens.detail]}
                  title={projectTitle}
                  theme="blogapp"
                  alts={[t("projects.screens.blogLogin"), t("projects.screens.blogFeed"), t("projects.screens.blogDetail")]}
                />
              ) : isTrafficProject ? (
                <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-t-2xl bg-slate-50">
                  <img
                    src={project.image}
                    alt={t("projects.coverAlt", { title: projectTitle })}
                    width={project.image ? imageSizes[project.image]?.width : undefined}
                    height={project.image ? imageSizes[project.image]?.height : undefined}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              ) : (
                <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[16px] border border-border-primary bg-bg-level-2">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={t("projects.coverAlt", { title: projectTitle })}
                      width={imageSizes[project.image]?.width}
                      height={imageSizes[project.image]?.height}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-auto max-h-full max-w-full object-contain object-center"
                    />
                  ) : (
                    <div className="flex h-full flex-col justify-end bg-[linear-gradient(135deg,#ffffff_0%,#f5faff_48%,#eaf2ff_100%)] p-5 transition duration-300 ease-out">
                      <div className="absolute left-5 top-5">
                        <span className="grid size-11 place-items-center rounded-control border border-brand-link/15 bg-white text-brand-link shadow-tiny">
                          <ImageIcon className="size-5" aria-hidden="true" />
                        </span>
                      </div>
                      <div>
                        <p className="mt-2 max-w-sm text-lg font-semibold leading-6 tracking-[-0.02em] text-text-primary">
                          {projectTitle}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-1 flex-col p-2 pt-5">
                <h3 className="text-2xl font-semibold leading-8 tracking-[-0.035em] text-text-primary">
                  {projectTitle}
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-link">{t(project.categoryKey)}</p>

                <p className={`mt-3 text-sm leading-7 text-text-tertiary ${isFullStackAIChat ? "max-h-[5.25rem] overflow-hidden" : ""}`}>
                  {t(project.shortDescriptionKey)}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {visibleTechnologies.map((technology) => (
                    <span
                      key={technology}
                      className="max-w-full truncate rounded-full border border-border-primary bg-bg-level-2 px-3 py-1.5 text-xs font-semibold text-text-secondary sm:max-w-[12rem]"
                      title={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid gap-2">
                  {visibleFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm font-medium text-text-secondary">
                      <CheckCircle2 className="size-4 shrink-0 text-brand-link" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-6">
                  <div className="flex flex-wrap gap-3">
                  {hasProjectUrl ? (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={t("projects.openDemoLabel", { title: projectTitle })}
                      className="button-secondary max-w-full"
                    >
                      {t("projects.liveDemo")}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  ) : null}
                  {hasGithubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={t("projects.openGithubLabel", { title: projectTitle })}
                      className="button-primary max-w-full"
                    >
                      <Github className="size-4" aria-hidden="true" />
                      GitHub
                    </a>
                  ) : null}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
