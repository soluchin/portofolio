interface Profile {
    name: string;
    image: Object;
    title: string;
    bio: string;
    github: string;
    linkedin: string;
    homeLonglat?: { lat: number; long: number };
}

export type { Profile };