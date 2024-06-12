import { Injectable } from '@angular/core';

export interface Skill {
  id: number;
  name: string;
  photoUrl?: string | null;
  createdTime: string;
}

export interface Language {
  id: number;
  language: {
    id: number;
    name: string;
    createdTime: string;
  };
  languageLevel: string;
  createdTime: string;
}

export interface Certificate {
  id: number;
  name: string;
  description: string;
  certificateUrl: string;
  credential: string;
  issued: string;
  userId: number;
  skills: Skill[];
}

export interface Experience {
  id: number;
  companyName: string;
  description: string;
  position: string;
  workType: string;
  city: string;
  fromDate: string;
  toDate: string;
  userId: number;
  createdTime: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  photoUrl: string;
  userId: number;
  urlToCode?: string | null;
  urlToSite?: string | null;
  skills: Skill[];
}

export interface Social {
  id: number;
  socialNetwork: string;
  url: string;
  userId: number;
  createdTime: string;
}

export interface Education {
  id: number;
  name: string;
  description: string;
  city: string;
  fromDate: string;
  toDate: string;
  educationWebSiteUrl?: string | null;
  userId: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  middleName?: string | null;
  birthDay: string;
  gender: string;
  profession: string;
  aboutMe: string;
  phoneNumber: string;
  photoUrl?: string | null;
  resumeUrl?: string | null;
  createdTime: string;
  skills: Skill[];
  languages: Language[];
  certificates: Certificate[];
  experiences: Experience[];
  projects: Project[];
  socials: Social[];
  educations: Education[];
}

// export const mockData: User = {
//   id: 1,
//   firstName: "Test",
//   lastName: "Testov",
//   email: "sarvarabduqodirov799@gmail.com",
//   middleName: "",
//   birthDay: "2002-03-16",
//   gender: "Male",
//   profession: "Software engineer",
//   aboutMe:
//     "I am a junior .net engineer. Skilled and curious Junior Software Engineer with experience producing robust systems using .NET Core at the backend and React, Typescript at the frontend. Eager to design solid architectures and clean code. Good understanding of object oriented programming and fast learner.",
//   phoneNumber: "+998932340316",
//   photoUrl:
//     "https://api.portfolio.sarvarbekabduqodirov.uz/api/storage/3b1f6bb7-1de2-4a33-842d-d24360434dd7.jpg",
//   resumeUrl:
//     "https://api.portfolio.sarvarbekabduqodirov.uz/api/storage/2c97d4f0-b40e-4abe-98aa-389d5b10c6f8.pdf",
//   createdTime: "2024-04-27T05:52:10.17866",
//   skills: [
//     {
//       id: 1,
//       name: "C#",
//       photoUrl:
//         "https://api.portfolio.sarvarbekabduqodirov.uz/api/storage/24259bdc-5e03-4fe6-8c70-1e55e16753ba.png",
//       createdTime: "2024-04-27T05:56:37.5629217",
//     },
//     {
//       id: 2,
//       name: "Python",
//       photoUrl:
//         "https://api.portfolio.sarvarbekabduqodirov.uz/api/storage/07d34eb3-c68e-40a5-a95f-da00065da2b8.png",
//       createdTime: "2024-04-27T05:56:37.6799948",
//     },
//     // Add more skills here
//   ],
//   languages: [
//     {
//       id: 1,
//       language: {
//         id: 1,
//         name: "English",
//         createdTime: "2024-04-27T06:01:24.8142328",
//       },
//       languageLevel: "B2_Upper_Intermediate",
//       createdTime: "2024-04-27T06:01:24.828518",
//     },
//     {
//       id: 2,
//       language: {
//         id: 2,
//         name: "Russian",
//         createdTime: "2024-04-27T06:01:47.4324179",
//       },
//       languageLevel: "A2_Elementary",
//       createdTime: "2024-04-27T06:01:47.432619",
//     },
//     // Add more languages here
//   ],
//   certificates: [
//     {
//       id: 1,
//       name: "Certificate 1",
//       description: "Description of Certificate 1",
//       certificateUrl:
//         "https://docs.google.com/document/d/1CbEbR827bl76eycMg-880Ni-OHGvYQgufyMq8yE9-nc/edit",
//       credential: "CbEbR827bl76eycMg-880Ni-OHGvYQgufyMq8yE9-nc",
//       issued: "2025-10-10",
//       userId: 1,
//       skills: [
//         {
//           id: 1,
//           name: "C#",
//           photoUrl:
//             "https://api.portfolio.sarvarbekabduqodirov.uz/api/storage/24259bdc-5e03-4fe6-8c70-1e55e16753ba.png",
//           createdTime: "2024-04-27T05:56:37.5629217",
//         },
//         // Add more skills if required
//       ],
//     },
//     {
//       id: 2,
//       name: "Certificate 2",
//       description: "Description of Certificate 2",
//       certificateUrl:
//         "https://docs.google.com/document/d/1CbEbR827bl76eycMg-880Ni-OHGvYQgufyMq8yE9-nc/edit",
//       credential: "CbEbR827bl76eycMg-880Ni-OHGvYQgufyMq8yE9-nc",
//       issued: "2025-10-10",
//       userId: 1,
//       skills: [
//         {
//           id: 2,
//           name: "Python",
//           photoUrl:
//             "https://api.portfolio.sarvarbekabduqodirov.uz/api/storage/07d34eb3-c68e-40a5-a95f-da00065da2b8.png",
//           createdTime: "2024-04-27T05:56:37.6799948",
//         },
//         // Add more skills if required
//       ],
//     },
//     // Add more certificates here
//   ],
//   experiences: [
//     {
//       id: 1,
//       companyName: "Itransition",
//       description: "Creating a lot of web applications and other sites",
//       position: "Software Engineer",
//       workType: "FullTime_Office",
//       city: "Tashkent",
//       fromDate: "2023-04-27",
//       toDate: "2023-07-27",
//       userId: 1,
//       createdTime: "2024-04-27T06:00:29.0753484",
//       skills: [],
//     },
//     {
//       id: 1,
//       companyName: "Itransition",
//       description: "Creating a lot of web applications and other sites",
//       position: "Software Engineer",
//       workType: "FullTime_Office",
//       city: "Tashkent",
//       fromDate: "2023-04-27",
//       toDate: "2023-07-27",
//       userId: 1,
//       createdTime: "2024-04-27T06:00:29.0753484",
//       skills: [],
//     },
//     {
//       id: 1,
//       companyName: "Itransition",
//       description: "Creating a lot of web applications and other sites",
//       position: "Software Engineer",
//       workType: "FullTime_Office",
//       city: "Tashkent",
//       fromDate: "2023-04-27",
//       toDate: "2023-07-27",
//       userId: 1,
//       createdTime: "2024-04-27T06:00:29.0753484",
//       skills: [],
//     },
//     // Add more experiences here
//   ],
//   projects: [
//     {
//       id: 1,
//       name: "CRM website",
//       description: "CRM website for ElectroTrading company",
//       photoUrl:
//         "https://api.portfolio.sarvarbekabduqodirov.uz/api/storage/0286a4b3-60ac-4d48-89fa-22c887ab821c.png",
//       userId: 1,
//       urlToCode: "https://www.etrading.uz",
//       urlToSite: "https://www.etrading.uz",
//       skills: [],
//     },
//     {
//       id: 1,
//       name: "CRM website",
//       description: "CRM website for ElectroTrading company",
//       photoUrl:
//         "https://api.portfolio.sarvarbekabduqodirov.uz/api/storage/0286a4b3-60ac-4d48-89fa-22c887ab821c.png",
//       userId: 1,
//       urlToCode: "https://www.etrading.uz",
//       urlToSite: "https://www.etrading.uz",
//       skills: [],
//     },
//     {
//       id: 1,
//       name: "CRM website",
//       description: "CRM website for ElectroTrading company",
//       photoUrl:
//         "https://api.portfolio.sarvarbekabduqodirov.uz/api/storage/0286a4b3-60ac-4d48-89fa-22c887ab821c.png",
//       userId: 1,
//       urlToCode: "https://www.etrading.uz",
//       urlToSite: "https://www.etrading.uz",
//       skills: [],
//     },
//     {
//       id: 1,
//       name: "CRM website",
//       description: "CRM website for ElectroTrading company",
//       photoUrl:
//         "https://api.portfolio.sarvarbekabduqodirov.uz/api/storage/0286a4b3-60ac-4d48-89fa-22c887ab821c.png",
//       userId: 1,
//       urlToCode: "https://www.etrading.uz",
//       urlToSite: "https://www.etrading.uz",
//       skills: [],
//     },
//     {
//       id: 1,
//       name: "CRM website",
//       description: "CRM website for ElectroTrading company",
//       photoUrl:
//         "https://api.portfolio.sarvarbekabduqodirov.uz/api/storage/0286a4b3-60ac-4d48-89fa-22c887ab821c.png",
//       userId: 1,
//       urlToCode: "https://www.etrading.uz",
//       urlToSite: "https://www.etrading.uz",
//       skills: [],
//     },
//     {
//       id: 1,
//       name: "CRM website",
//       description: "CRM website for ElectroTrading company",
//       photoUrl:
//         "https://api.portfolio.sarvarbekabduqodirov.uz/api/storage/0286a4b3-60ac-4d48-89fa-22c887ab821c.png",
//       userId: 1,
//       urlToCode: "https://www.etrading.uz",
//       urlToSite: "https://www.etrading.uz",
//       skills: [],
//     },
//     {
//       id: 1,
//       name: "CRM website",
//       description: "CRM website for ElectroTrading company",
//       photoUrl:
//         "https://api.portfolio.sarvarbekabduqodirov.uz/api/storage/0286a4b3-60ac-4d48-89fa-22c887ab821c.png",
//       userId: 1,
//       urlToCode: "https://www.etrading.uz",
//       urlToSite: "https://www.etrading.uz",
//       skills: [],
//     },
//     // Add more projects here
//   ],
//   socials: [
//     {
//       id: 1,
//       socialNetwork: "Telegram",
//       url: "https://drive.google.com/drive/home",
//       userId: 1,
//       createdTime: "2024-04-27T06:06:04.4113597",
//     },
//     {
//       id: 2,
//       socialNetwork: "LinkedIn",
//       url: "https://www.linkedin.com/feed/",
//       userId: 1,
//       createdTime: "2024-04-27T06:06:37.3964372",
//     },
//     {
//       id: 3,
//       socialNetwork: "GitHub",
//       url: "https://github.com/",
//       userId: 1,
//       createdTime: "2024-04-27T06:06:37.3964372",
//     },
//     {
//       id: 4,
//       socialNetwork: "GitLab",
//       url: "https://gitlab.com/",
//       userId: 1,
//       createdTime: "2024-04-27T06:06:37.3964372",
//     },
//     {
//       id: 5,
//       socialNetwork: "Twitter",
//       url: "https://twitter.com/",
//       userId: 1,
//       createdTime: "2024-04-27T06:06:37.3964372",
//     },
//   ],
//   educations: [
//     {
//       id: 1,
//       name: "TUIT",
//       description: "Tashkant University of Information Technologies description",
//       city: "Tashkent",
//       fromDate: "2020-09-04",
//       toDate: "2024-07-27",
//       educationWebSiteUrl: "https://www.tuit.uz",
//       userId: 1,
//     },
//     {
//       id: 1,
//       name: "TUIT",
//       description: "Tashkant University of Information Technologies description",
//       city: "Tashkent",
//       fromDate: "2020-09-04",
//       toDate: "2024-07-27",
//       educationWebSiteUrl: "https://www.tuit.uz",
//       userId: 1,
//     },
//     {
//       id: 1,
//       name: "TUIT",
//       description: "Tashkant University of Information Technologies description",
//       city: "Tashkent",
//       fromDate: "2020-09-04",
//       toDate: "2024-07-27",
//       educationWebSiteUrl: "https://www.tuit.uz",
//       userId: 1,
//     },
//     // Add more educations here
//   ],
// };


// @Injectable({
//   providedIn: 'root'
// })


// export class DataTypesService {
//   constructor() { }
// }
