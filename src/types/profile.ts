interface Profile {
    name: string;
    image: Object;
    titles: string[];
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    homeLonglat?: { lat: number; long: number };
    resumeURL?: string;
}

export type { Profile };