export type Project = {
  id: string;
  titleKey: string;
  categoryKey: string;
  shortDescriptionKey: string;
  image?: string;
  technologies: string[];
  featuresKey: string;
  learningOutcomeKey?: string;
  architectureKey?: string;
  githubUrl?: string;
  projectUrl?: string;
};

export const projects: Project[] = [
  {
    id: "restaurantManagement",
    titleKey: "projects.items.restaurantManagement.title",
    categoryKey: "projects.items.restaurantManagement.category",
    shortDescriptionKey: "projects.items.restaurantManagement.shortDescription",
    image: "/restaurant-management-cover.svg",
    technologies: [
      "ASP.NET Core Web API",
      "React",
      "TypeScript",
      "Entity Framework Core",
      "SQL Server",
      "Clean Architecture",
      "CQRS",
      "MediatR",
      "JWT",
      "FluentValidation",
      "QuestPDF",
    ],
    featuresKey: "projects.items.restaurantManagement.features",
    learningOutcomeKey: "projects.items.restaurantManagement.learningOutcome",
    architectureKey: "projects.items.restaurantManagement.architecture",
    githubUrl: "https://github.com/rabiaakdas/RestaurantManagement",
  },
  {
    id: "libraryManagement",
    titleKey: "projects.items.libraryManagement.title",
    categoryKey: "projects.items.libraryManagement.category",
    shortDescriptionKey: "projects.items.libraryManagement.shortDescription",
    image: "/library-management-cover.png",
    technologies: ["ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "REST API", "Bootstrap", "HTML", "CSS", "JavaScript"],
    featuresKey: "projects.items.libraryManagement.features",
    githubUrl: "https://github.com/rabiaakdas/LibraryManagement",
  },
  {
    id: "fullStackAiChat",
    titleKey: "projects.items.fullStackAiChat.title",
    categoryKey: "projects.items.fullStackAiChat.category",
    shortDescriptionKey: "projects.items.fullStackAiChat.shortDescription",
    image: "/fullstack-ai-chat-cover.png",
    technologies: ["ASP.NET Core", "React", "React Native", "TypeScript", "EF Core", "SQLite", "Python", "REST API"],
    featuresKey: "projects.items.fullStackAiChat.features",
    githubUrl: "https://github.com/rabiaakdas/fullstack-ai-chat",
    projectUrl: "https://fullstack-ai-chat-two.vercel.app/",
  },
  {
    id: "bookVerse",
    titleKey: "projects.items.bookVerse.title",
    categoryKey: "projects.items.bookVerse.category",
    shortDescriptionKey: "projects.items.bookVerse.shortDescription",
    image: "/bookverse-cover.png",
    technologies: ["Flutter", "Dart", "Laravel", "PHP", "Laravel Sanctum", "REST API", "MySQL"],
    featuresKey: "projects.items.bookVerse.features",
    githubUrl: "https://github.com/rabiaakdas/BookVerse",
  },
  {
    id: "blogApp",
    titleKey: "projects.items.blogApp.title",
    categoryKey: "projects.items.blogApp.category",
    shortDescriptionKey: "projects.items.blogApp.shortDescription",
    technologies: ["Flutter", "Dart", "Provider", "Dio", "Laravel", "PHP", "Laravel Sanctum", "MySQL", "REST API"],
    featuresKey: "projects.items.blogApp.features",
    githubUrl: "https://github.com/rabiaakdas/BlogApp",
  },
  {
    id: "petShopWeb",
    titleKey: "projects.items.petShopWeb.title",
    categoryKey: "projects.items.petShopWeb.category",
    shortDescriptionKey: "projects.items.petShopWeb.shortDescription",
    image: "/petshopweb.png",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    featuresKey: "projects.items.petShopWeb.features",
    githubUrl: "https://github.com/rabiaakdas/PetShopWeb",
  },
  {
    id: "trafficVehicle",
    titleKey: "projects.items.trafficVehicle.title",
    categoryKey: "projects.items.trafficVehicle.category",
    shortDescriptionKey: "projects.items.trafficVehicle.shortDescription",
    image: "/trafik-cover.png",
    technologies: ["Python", "Computer Vision"],
    featuresKey: "projects.items.trafficVehicle.features",
  },
];
