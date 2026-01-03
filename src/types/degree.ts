interface Degree {
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startYear: number;
    endYear: number | "present";
    grade?: string;
    description?: string;
}

export type { Degree };