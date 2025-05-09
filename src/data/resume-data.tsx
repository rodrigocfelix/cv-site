import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rodrigo Félix",
  initials: "RF",
  location: "Fernão Ferro, Portugal, PT",
  locationLink: "https://www.google.com/maps/place/Fernão Ferro, Portugal",
  about:
    "Computer Science and Engineering graduate currently working as a Consultant at Link Consulting.",
  summary:
    "I'm a Computer Science and Engineering graduate with a passion for technology and continuous learning. During my master's degree I balanced part-time work with my studies, and since completing my thesis, I’ve been working full-time in the tech industry. I’m highly motivated and like to challenge myself with complex problems. I have a strong background in cloud computing, DevOps, and infrastructure as code, as well as hands-on experience with backend development using Spring and Quarkus.",
  avatarUrl: "felix.jpg",
  personalWebsiteUrl: "https://rcfelix.pt",
  contact: {
    email: "me@rcfelix.pt",
    tel: "+351919912074",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rodrigocfelix",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rodrigocfelix/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "NOVA School of Science and Technology",
      degree: "Master's degree, Computer Science and Engineering",
      start: "2021",
      end: "2023",
    },
    {
      school: "NOVA School of Science and Technology",
      degree: "Bachelor's degree, Computer Science and Engineering",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Link Consulting",
      link: "https://linkconsulting.com/",
      badges: ["Remote"],
      title: "Consultant",
      start: "2024",
      end: null,
      description:
        "In my current role, I primarily focus on the DevOps aspect of our project, utilizing mostly ArgoCD and GitHub Actions. I also took ownership of building and maintaining a monitoring stack for our Kubernetes clusters using tools such as Promtail, Loki and Grafana. Additionally, I sometimes contribute to backend development using Java with Spring.",
    },
    {
      company: "Link Consulting",
      link: "https://linkconsulting.com/",
      badges: ["Remote", "Part-time"],
      title: "Junior Consultant",
      start: "2021",
      end: "2024",
      description:
      "During my part-time, I supported the development of cloud-based solutions. I automated infrastructure deployments using Terraform and integrated CI/CD pipelines using GitLab CI/CD. When infrastructure updates were not needed, I focused on backend development with Java (Quarkus).",
    },
    {
      company: "Link Consulting",
      link: "https://linkconsulting.com/",
      badges: ["Remote"],
      title: "Intern",
      start: "April 2021",
      end: "August 2021",
      description:
        "As an intern, I focused on Kubernetes deployments, creating deployment files and configuring Helm charts. I gained exposure to technologies like Kong, Istio, Kafka and Solace and worked closely with senior engineers to support cloud-agnostic initiatives.",
    },
  ],
  skills: [
    "DevOps",
    "Gitlab CI/CD",
    "Github Actions",
    "Infraestructure as Code",
    "Terraform",
    "Kubernetes",
    "ArgoCD",
    "Helm",
    "Docker",
    "Kustomize",
    "Sealed Secrets",
    "Prometheus",
    "Promtail",
    "Loki",
    "Grafana",
    "AWS",
    "Oracle",
    "Kong",
    "Istio",
    "Solace",
    "Quarkus",
    "Spring",
    "Java",
    "Agile",
  ],
  hobbies: [
    "DIY Electronics",
    "Home Automation",
    "Tech",
    "Running",
    "Cycling",
    "Swimming",
    "Handball",
    "Gaming",
    "Simracing",
  ],
} as const;
