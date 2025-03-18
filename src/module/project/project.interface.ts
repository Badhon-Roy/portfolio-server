export interface IProject {
    name: string;
    images: string[];
    description: string;
    technologiesUsed: {
      frontend: string[];
      backend: string[];
      database: string;
      authentication: string;
    };
    teamMembers: string;
    projectType: "personal" | 'team';
    role: string;
    liveSite: string;
    clientSiteGitHub: string;
    serverSiteGitHub: string;
    keyFeatures: string[];
    challengesFaced: string[];
    futureImprovements: string[];
  }
  