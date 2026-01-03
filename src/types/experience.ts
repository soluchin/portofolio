interface Experience {
    company: string;
    role: string;
    startDate: Date;
    endDate: Date | "present";
    description: string;
    location?: string;
    longlat?: { lat: number; long: number };
}

export type { Experience };