interface Degree {
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startYear: number;
    endYear: number | "present";
    grade?: string;
    description?: string;
    longlat?: { lat: number; long: number };
}

export type { Degree };