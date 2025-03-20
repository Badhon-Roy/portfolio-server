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
    projectType: "personal" | 'team';
    liveSite: string;
    clientSiteGitHub: string;
    serverSiteGitHub: string;
    keyFeatures: string[];
}
  