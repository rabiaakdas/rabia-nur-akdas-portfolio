import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/rabiaakdas",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rabiaakdas",
    icon: FaLinkedinIn,
  },
];

export const contactItems = [
  {
    labelKey: "contact.labels.location",
    valueKey: "contact.values.location",
    href: "https://www.google.com/maps/search/%C4%B0stanbul%2C+T%C3%BCrkiye",
    icon: MapPin,
  },
  {
    labelKey: "contact.labels.email",
    value: "rabiaakdas00@gmail.com",
    href: "mailto:rabiaakdas00@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rabiaakdas",
    href: "https://linkedin.com/in/rabiaakdas",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/rabiaakdas",
    href: "https://github.com/rabiaakdas",
    icon: Github,
  },
];
