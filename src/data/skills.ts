export type SkillGroup = {
  id: "backend" | "frontend" | "mobile" | "database" | "tools" | "other";
  titleKey: string;
  descriptionKey: string;
  items: SkillItem[];
  highlighted?: boolean;
};

export type SkillItem = {
  label: string;
  labelKey?: string;
  iconKey?: string;
};

export const skills: SkillGroup[] = [
  {
    id: "backend",
    titleKey: "skills.groups.backend.title",
    descriptionKey: "skills.groups.backend.description",
    items: ["C#", "ASP.NET Core", "Entity Framework Core", "REST API", "PHP", "Laravel"].map((label) => ({ label })),
    highlighted: true,
  },
  {
    id: "frontend",
    titleKey: "skills.groups.frontend.title",
    descriptionKey: "skills.groups.frontend.description",
    items: ["React", "JavaScript", "TypeScript", "HTML", "CSS"].map((label) => ({ label })),
  },
  {
    id: "mobile",
    titleKey: "skills.groups.mobile.title",
    descriptionKey: "skills.groups.mobile.description",
    items: ["Flutter", "Dart", "React Native"].map((label) => ({ label })),
  },
  {
    id: "database",
    titleKey: "skills.groups.database.title",
    descriptionKey: "skills.groups.database.description",
    items: ["SQL Server", "MySQL", "SQLite"].map((label) => ({ label })),
  },
  {
    id: "tools",
    titleKey: "skills.groups.tools.title",
    descriptionKey: "skills.groups.tools.description",
    items: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman", "Swagger"].map((label) => ({ label })),
  },
  {
    id: "other",
    titleKey: "skills.groups.other.title",
    descriptionKey: "skills.groups.other.description",
    items: [
      { label: "Python" },
      { label: "Artificial Intelligence", labelKey: "skills.items.artificialIntelligence", iconKey: "Artificial Intelligence" },
      { label: "Computer Vision", labelKey: "skills.items.computerVision", iconKey: "Computer Vision" },
    ],
  },
];
