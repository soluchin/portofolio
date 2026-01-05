import type { Profile } from "../types/profile";
import type { Experience } from "../types/experience";
import type { Certification } from "../types/certification";
import type { Project } from "../types/project";
import type { Stack } from "../types/stack";
import type { Degree } from "../types/degree";

import ProfilePic from "../assets/profile.jpg";
import JsIcon from "../assets/js.svg";
import TsIcon from "../assets/ts.svg";
import DockerIcon from "../assets/docker.svg";
import ReactIcon from "../assets/react.svg";
import CSIcon from "../assets/cs.svg";
import NetCoreIcon from "../assets/netcore.svg";
import PostgreSQLIcon from "../assets/postgresql.svg";
import GitIcon from "../assets/git.svg";
import KafkaIcon from "../assets/kafka.svg";
import NestJSIcon from "../assets/nestjs.svg";

export const profile: Profile = {
    name: "Rafi Solichin",
    image: ProfilePic,
    title: "Software Engineer",
    bio: "Software engineer with a passion for creating impactful solutions.",
    github: "https://github.com/soluchin",
    linkedin: "https://www.linkedin.com/in/rafisolichin",
}

export const techStacks: Stack[] = [
    {name: "C#", icon: CSIcon},
    {name: ".NET Core", icon: NetCoreIcon},
    {name: "JavaScript", icon: JsIcon},
    {name: "TypeScript", icon: TsIcon},
    {name: "NestJS", icon: NestJSIcon},
    {name: "React", icon: ReactIcon},
    {name: "Docker", icon: DockerIcon},
    {name: "PostgreSQL", icon: PostgreSQLIcon},
    {name: "Version Control (Git)", icon: GitIcon},
    {name: "Kafka Message Broker", icon: KafkaIcon},
];

export const experiences: Experience[] = [
    {
        company: "PT AAAAAAA",
        role: "Software Engineer",
        startDate: new Date("2022-08-01"),
        endDate: new Date("2023-08-01"),
        description: "Working on various web development projects using modern technologies.",
        location: "Bandung, Indonesia",
        longlat: { lat: -6.9175, long: 107.6191 },
    },
    {
        company: "PT BBBBBBB",
        role: "Software Engineer",
        startDate: new Date("2023-08-01"),
        endDate: new Date("2024-08-01"),
        description: "Working on various web development projects using modern technologies.",
        location: "Yogyakarta, Indonesia",
        longlat: { lat: -7.7956, long: 110.3695 },
    },
    {
        company: "PT CCCCCCC",
        role: "Software Engineer",
        startDate: new Date("2024-08-01"),
        endDate: "present",
        description: "Working on various web development projects using modern technologies.",
        location: "South Jakarta, Indonesia",
        longlat: { lat: -6.2615, long: 106.8106 },
    },
    {
        company: "PT DDDDDDD",
        role: "Software Engineer",
        startDate: new Date("2024-08-01"),
        endDate: "present",
        description: "Working on various web development projects using modern technologies.",
        location: "South Jakarta, Indonesia",
        longlat: { lat: -6.2615, long: 103.8262 },
    },
    {
        company: "PT EEEEEEEE",
        role: "Software Engineer",
        startDate: new Date("2024-08-01"),
        endDate: "present",
        description: "Working on various web development projects using modern technologies.",
        location: "South Jakarta, Indonesia",
        longlat: { lat: -6.2425, long: 106.332 },
    },
]

export const certifications: Certification[] = [
    {
        title: "Certified Kubernetes Administrator",
        issuer: "The Linux Foundation",
        issueDate: new Date("2021-05-15"),
        credentialID: "CKA-1234567890",
        credentialURL: "https://www.linuxfoundation.org/certification/cka/",
    },
    {
        title: "Certified Kubernetes Administrator",
        issuer: "The Linux Foundation",
        issueDate: new Date("2021-05-15"),
        credentialID: "CKA-1234567890",
        credentialURL: "https://www.linuxfoundation.org/certification/cka/",
    },
    {
        title: "Certified Kubernetes Administrator",
        issuer: "The Linux Foundation",
        issueDate: new Date("2021-05-15"),
        credentialID: "CKA-1234567890",
        credentialURL: "https://www.linuxfoundation.org/certification/cka/",
    }
];

export const projects: Project[] = [
    {
        name: "Project Alpha",
        description: "A web application for managing tasks and projects.",
        url: "",
        technologies: ["React", "TypeScript", "Node.js"]
    },
    {
        name: "Project Beta",
        description: "A mobile app for tracking fitness activities.",
        url: "",
        technologies: ["React Native", "Expo", "Firebase"]
    },
    {
        name: "Project Gamma",
        description: "An e-commerce platform for buying and selling products.",
        url: "",
        technologies: ["Next.js", "GraphQL", "PostgreSQL"]
    }
];

export const degrees: Degree[] = [
    {
        degree: "Bachelor",
        fieldOfStudy: "Computer Science",
        institution: "Bogor Agricultural University",
        startYear: 2018,
        endYear: 2023,
        grade: "3.17 GPA",
        description: "Studied various computer science topics including algorithms, data structures, and software engineering."
    }
];