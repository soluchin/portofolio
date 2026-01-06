interface Degree {
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startYear: number;
    endYear: number | "present";
    grade?: string;
    favoriteCourses?: string[];
    projects?: { name: string; description: string }[];
    thesis?: { title: string; titleId?: string };
    longlat?: { lat: number; long: number };
}

export type { Degree };