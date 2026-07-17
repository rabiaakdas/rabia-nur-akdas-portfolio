export type Experience = {
  id: "ferisoft" | "hedef";
  roleKey: string;
  company: string;
  locationKey: string;
  periodKey: string;
  technologies: string[];
  highlightsKey: string;
};

export const experiences: Experience[] = [
  {
    id: "ferisoft",
    roleKey: "experience.items.ferisoft.role",
    company: "Ferisoft Yazılım",
    locationKey: "experience.items.ferisoft.location",
    periodKey: "experience.items.ferisoft.period",
    technologies: ["Flutter", "Dart", "GetX", "REST API", "JSON", "Git"],
    highlightsKey: "experience.items.ferisoft.highlights",
  },
  {
    id: "hedef",
    roleKey: "experience.items.hedef.role",
    company: "Hedef Bilişim Teknolojileri",
    locationKey: "experience.items.hedef.location",
    periodKey: "experience.items.hedef.period",
    technologies: ["Python", "Machine Learning", "Artificial Intelligence", "Data Preprocessing"],
    highlightsKey: "experience.items.hedef.highlights",
  },
];
