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
import PythonIcon from "../assets/python.svg";

export const profile: Profile = {
    name: "Rafi Solichin",
    image: ProfilePic,
    title: "Software Engineer",
    bio: "Fullstack developer specializing in server-side applications, databases, and API integrations. Proficient in Python, C#, JavaScript and Typescript with hands-on Docker experience. Currently exploring roles in System Architecture, DevOps, or Cloud Engineering.",
    email: "rafisolichin@gmail.com",
    github: "https://github.com/soluchin",
    linkedin: "https://www.linkedin.com/in/rafisolichin",
    homeLonglat: { lat: -6.115653, long: 106.179095 },
    resumeURL: "/my_resume.pdf",
}

export const techStacks: Stack[] = [
    {name: "C#", icon: CSIcon},
    {name: ".NET Core", icon: NetCoreIcon},
    {name: "JavaScript", icon: JsIcon},
    {name: "TypeScript", icon: TsIcon},
    {name: "NestJS", icon: NestJSIcon},
    {name: "React", icon: ReactIcon},
    {name: "Python", icon: PythonIcon},
    {name: "Docker", icon: DockerIcon},
    {name: "PostgreSQL", icon: PostgreSQLIcon},
    {name: "Version Control (Git)", icon: GitIcon},
    {name: "Kafka Message Broker", icon: KafkaIcon},
];

export const experiences: Experience[] = [
    {
        company: "Bangkit Academy 2021",
        role: "Machine Learning Path Student",
        startDate: new Date("2021-02-01"),
        endDate: new Date("2021-07-01"),
        description: "Completed the Machine Learning Path in Bangkit Academy, gaining hands-on experience in machine learning concepts and applications.",
        location: "Remote",
        longlat: { lat: -6.21462, long: 106.84513 },
    },
    {
        company: "Indonesia AI",
        role: "Deep Learning Bootcamp",
        startDate: new Date("2021-08-01"),
        endDate: new Date("2021-09-01"),
        description: "Participated in a Deep Learning Bootcamp organized by Indonesia AI, focusing on advanced deep learning techniques and their practical implementations.",
        location: "Remote",
        longlat: { lat: -6.21462, long: 106.84513 },
    },
    {
        company: "DSITD Bogor Agricultural University",
        role: "Data Engineer Intern",
        startDate: new Date("2022-06-01"),
        endDate: new Date("2022-07-01"),
        description: "Working on data cleansing and analysis projects. Visualized data using Power BI to support decision-making processes.",
        location: "Bogor, Indonesia",
        longlat: { lat: -6.556510298748232, long: 106.73273680789637 },
    },
    {
        company: "Kodehive Technology & Academy",
        role: "Fullstack Developer & Trainer",
        startDate: new Date("2022-09-01"),
        endDate: new Date("2023-09-01"),
        description: "Responsible for Developing web-based software using C# and the .NET framework, while building and maintaining client-side mobile applications with Flutter. Managed application deployment using Docker containerization and continuously adopted emerging technologies including Microservices architecture and Redis to enhance performance and scalability.",
        location: "South Jakarta, Indonesia",
        longlat: { lat: -6.270847317120685, long: 106.79731225664145 },
    },
    {
        company: "Trainocate",
        role: "Trainer - Oracle SQL Fundamental I",
        startDate: new Date("2022-11-12"),
        endDate: new Date("2022-11-16"),
        description: "Conducted training sessions on Oracle SQL fundamentals. Covered essential topics such as database concepts, SQL syntax and data manipulation.",
        location: "South Jakarta, Indonesia",
        longlat: { lat: -6.227694941996302, long: 106.80622655624865 },
    },
    {
        company: "Politeknik Gajah Tunggal",
        role: "Trainer - Mobile Apps Development with Flutter",
        startDate: new Date("2022-12-01"),
        endDate: new Date("2023-02-01"),
        description: "Led mobile development training sessions covering the complete Flutter development lifecycle—from Dart fundamentals and UI design to advanced state management with Riverpod, GetX, and BLoC. Taught participants networking concepts and server-side integration through HTTP requests and CRUD operations.",
        location: "South Jakarta, Indonesia",
        longlat: { lat: -6.2425, long: 106.332 },
    },
    {
        company: "Trainocate",
        role: "Trainer - Docker and Kubernetes fundamental",
        startDate: new Date("2023-12-01"),
        endDate: new Date("2023-12-05"),
        description: "Delivered training on containerization fundamentals and modern deployment practices. Guided participants through the complete Docker workflow—from application packaging to image creation and container management. Covered Kubernetes orchestration including container management, auto-scaling configurations, and inter-service networking within clusters.",
        location: "South Jakarta, Indonesia",
        longlat: { lat: -6.2425, long: 106.332 },
    },
    {
        company: "PT Nawa Data Solutions",
        role: "Data Engineer",
        startDate: new Date("2023-09-01"),
        endDate: new Date("2024-03-01"),
        description: "Translated business requirements into effective data solutions. Maintained SQL procedures and troubleshot data issues to ensure optimal system performance and data integrity.",
        location: "West Jakarta, Indonesia",
        longlat: { lat: -6.174457379990664, long: 106.79000100441316 },
    },
    {
        company: "Client: Unisma Bekasi",
        role: "Freelance - Fullstack Web Developer",
        startDate: new Date("2024-04-01"),
        endDate: new Date("2024-10-01"),
        description: "Developed a payroll management system using NestJS, handling requirement gathering and client collaboration. Implemented salary calculations including education-based and tenure-based adjustments. Deployed application and database to on-premise servers using Docker.",
        location: "East Bekasi, Indonesia",
        longlat: { lat: -6.2569676355831385, long: 107.00622356974017 },
    },
    {
        company: "PT Bukit Silikon Indonesia",
        role: "Software Engineer",
        startDate: new Date("2024-05-01"),
        endDate: "present",
        description: "Built and maintained healthcare web applications using C# and ASP.NET MVC framework, with front-end optimization using jQuery and AJAX. Extended technical expertise to Android mobile development with Kotlin. Researched and implemented third-party integrations such as Google SSO authentication and payment gateway services. Currently developing an OSINT-based person search tool utilizing web scraping techniques.",
        location: "West Jakarta, Indonesia",
        longlat: { lat: -6.174422124213384, long: 106.78978306856816 },
    },
]

export const certifications: Certification[] = [
    {
        title: "Google IT Support",
        issuer: "Coursera",
        issueDate: new Date("2021-03-22"),
        credentialID: "",
        credentialURL: "https://coursera.org/share/8e48545e5ed5cac30e6674f78835cb93",
    },
    {
        title: "Certified Kubernetes Administrator",
        issuer: "Coursera",
        issueDate: new Date("2021-03-21"),
        credentialID: "",
        credentialURL: "https://coursera.org/share/c294e3cb7383f30bc42642951b17445d",
    },
    {
        title: "Certified Kubernetes Administrator",
        issuer: "Coursera",
        issueDate: new Date("2021-03-29"),
        credentialID: "",
        credentialURL: "https://coursera.org/share/cbf4cc08195b30a850f571598e18fbb0",
    },
    {
        title: "DeepLearning.AI TensorFlow Developer",
        issuer: "Deeplearning.AI - Coursera",
        issueDate: new Date("2022-04-18"),
        credentialID: "",
        credentialURL: "https://coursera.org/share/d5acd9a8edec84afeb46e29816ab8a7d",
    }
];

export const projects: Project[] = [
    {
        name: "Snake Species Classification",
        description: "Using the Convolutional Neural Network, four types of snake species were classified. Feature extraction is done by convolution technique and classifier using simple Deep Learning architecture. Snake species were successfully classified with 85% accuracy.",
        url: "",
        technologies: ["Python", "Tensorflow", "CNN"]
    },
    {
        name: "Human Gender Classification",
        description: "This project aims to build a model that can recognize the gender of a person based on the characteristics that are different between male and female. using CNN deep learning and exception architecture, Model can classify with 82% accuracy.",
        url: "",
        technologies: ["Python", "Tensorflow", "CNN"]
    },
    {
        name: "Covid-19 Vaccine Sentiment Analysis",
        description: "A few years ago, Indonesian Twitter users were busy with opinions about the Covid-19 vaccine. Many people reveal their opinion about vaccines, and there are so many to check it one by one. I tried to build a Sentiment classifier and was successful with 64% accuracy .",
        url: "",
        technologies: ["Python", "Tensorflow", "KNN"]
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
        favoriteCourses: [
            "Data Structures",
            "Software Engineering",
            "Object-Based System Development",
            "Database Management",
            "Data Mining",
            "Information Retrieval",
            "Artificial Intelligence",
            "Smart Systems",
            "Computer Vision"
        ],
        projects: [
            { name: "Data Mining", description: "Analyzed bank customer data to identify payment behavior patterns" },
            { name: "Information Retrieval", description: "Built an email spam classifier" },
            { name: "Artificial Intelligence", description: "Sudoku solver using backpropagation, solved 1M problems without error" },
            { name: "Computer Vision", description: "Snake species classification based on skin pattern differences" }
        ],
        thesis: {
            title: "Thesis Advisor Recommendation System Based on Grades and Course Syllabus Using Categorical Data Skyline Search (CDSS)",
            titleId: "Sistem Rekomendasi Dosen Pembimbing Tugas Akhir Berdasarkan Nilai dan Silabus Mata Kuliah Menggunakan CDSS"
        },
        longlat: { lat: -6.55598639267481, long: 106.72639540846679 },
    }
];