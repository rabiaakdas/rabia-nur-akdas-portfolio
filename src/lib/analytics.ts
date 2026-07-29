import { track } from "@vercel/analytics";

type AnalyticsEventName =
  | "cv_download"
  | "github_click"
  | "linkedin_click"
  | "email_click"
  | "language_change"
  | "project_demo_click"
  | "project_github_click"
  | "project_card_view"
  | "contact_submit";

type AnalyticsProperties = Record<string, string | number | boolean | null | undefined>;

function trackEvent(name: AnalyticsEventName, properties?: AnalyticsProperties) {
  track(name, properties);
}

export function trackCvDownload(language: string) {
  trackEvent("cv_download", { language });
}

export function trackHeroSocialClick(label: string) {
  if (label === "GitHub") {
    trackEvent("github_click");
    return;
  }

  if (label === "LinkedIn") {
    trackEvent("linkedin_click");
  }
}

export function trackEmailClick(location: "contact_button" | "contact_card") {
  trackEvent("email_click", { location });
}

export function trackLanguageChange(fromLanguage: string, toLanguage: "tr" | "en") {
  trackEvent("language_change", {
    from_language: fromLanguage,
    to_language: toLanguage,
  });
}

export function trackProjectDemoClick(projectId: string, projectTitle: string) {
  trackEvent("project_demo_click", {
    project_id: projectId,
    project_title: projectTitle,
  });
}

export function trackProjectGithubClick(projectId: string, projectTitle: string) {
  trackEvent("project_github_click", {
    project_id: projectId,
    project_title: projectTitle,
  });
}

export function trackProjectCardView(projectId: string, projectTitle: string) {
  trackEvent("project_card_view", {
    project_id: projectId,
    project_title: projectTitle,
  });
}

export function trackContactSubmit() {
  trackEvent("contact_submit");
}
