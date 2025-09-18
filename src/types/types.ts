export type DataType = {
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
    title: string;
    description: string;
    technologiesUsed: string[];
    githubLink: string;
  }>;
};
