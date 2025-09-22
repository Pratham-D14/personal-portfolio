import { JSX, ReactNode } from "react";

interface technology {
  name: string;
  icon: string;
  color: string;
}

interface highlight {
  title: string;
  icon: JSX.Element;
}

export type DataType = {
  _id: string;
  skills: {
    frontendSkills: string[];
    backendSkills: string[];
    softSkills: string[];
  };
  workExperience: Array<{
    companyName: string;
    starting: string;
    ending: string;
    position: string;
    roleDescription: string;
    skillsUsed: string[];
    gradient: string;
    bgGradient: string;
    companyLogo: string;
    location: string;
    type: string;
    responsibilities: string[];
  }>;
  education: Array<{
    degree: string;
    university: string;
    starting: string;
    ending: string;
    description: string;
    courses: string[];
    gpa: string;
    location: string;
  }>;
  certification: Array<{
    name: string;
    provider: string;
    link: string;
    date: string;
    icon: string;
  }>;
  projects: Array<{
    id: number;
    title: string;
    subTitle: string;
    description: string;
    image: string;
    technologiesUsed: technology[];
    githubLink: string;
    liveLink: string;
    category: string;
    highlights: highlight[];
    gradient: string;
  }>;
  interest: Array<{
    icon: JSX.Element;
    title: string;
    description: string;
  }>;
  __v: number;
};
