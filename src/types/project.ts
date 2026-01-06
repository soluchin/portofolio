interface Project{
    name: string;
    description: string;
    url: string;
    technologies: string[];
    image?: string; // string to asset
}

export type { Project };