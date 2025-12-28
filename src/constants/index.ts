export const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

export const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "TailwindCSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "Next.js",
  "Flask",
  "Python",
  "Java",
  "C/C++",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "GitHub Actions",
  "RESTful APIs",
  "Figma",
  "Tableau",
];

import MotiflyImg from "../assets/motifly.png";
import PeerReviewJournalImg from "../assets/peer_review_journal.png";
import StatifyImg from "../assets/statify.png";
import MonthlySpotifyWrappedImg from "../assets/monthly_spotify_wrapped.png";
import LayoffsAnalysisImg from "../assets/layoffs_analysis.png";
import CityJailImg from "../assets/city_jail.jpg";
import WordStrikeImg from "../assets/word_strike.png";

export const PROJECTS = [
  {
    title: "Motifly",
    description:
      "A web application designed to support job seekers by combining a job-tracking dashboard, a role-specific resource hub, and a Motivation Buddy that evolves based on user activity. The platform helps users organize applications, discover learning resources, and reduce stress during the job search process.",
    imageSrc: MotiflyImg,
    liveLink: "https://strawberry-swirl.netlify.app/",
    githubLink: "https://github.com/cherryontech/strawberry-swirl",
    tags: ["JavaScript", "React", "TailwindCSS", "Agile"],
  },
  {
    title: "Peer Review Journal",
    description:
      "A full-stack web application built as the capstone project for NYU's Software Engineering course. The platform supports end-to-end academic peer review workflows, allowing authors to submit manuscripts while editors and referees manage reviews and guide submissions through state transitions until publication or rejection.",
    imageSrc: PeerReviewJournalImg,
    githubLink: "https://github.com/dooont/mmankwgzrz",
    tags: [
      "Flask",
      "React",
      "TailwindCSS",
      "MongoDB",
      "RESTful APIs",
      "CI/CD",
      "Agile",
      "DevOps",
    ],
  },
  {
    title: "Statify",
    description:
      "A full-stack web application for viewing Spotify track audio features. Integrates the Spotify Web API to let users search for songs, explore detailed audio statistics, and save tracks to a personalized bookmark library.",
    imageSrc: StatifyImg,
    githubLink:
      "https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-wukellyy",
    tags: [
      "Express.js",
      "Node.js",
      "MongoDB",
      "Bootstrap",
      "RESTful APIs",
      "Authentication",
    ],
  },
  {
    title: "Monthly Spotify Wrapped",
    description:
      "A web application that lets Spotify users view a snapshot of their listening habits for the current month. Users can see their top 5 artists and top 5 tracks, offering a lightweight, monthly alternative to Spotify's annual Wrapped and an easy way to track evolving music preferences over time.",
    imageSrc: MonthlySpotifyWrappedImg,
    githubLink: "https://github.com/wukellyy/Monthly-Spotify-Wrapped",
    tags: ["Flask", "HTML", "CSS", "Bootstrap", "Spotify API", "OAuth"],
  },
  {
    title: "Layoffs Analysis",
    description:
      "A data analysis project examining layoff trends across companies and industries from 2020-2024. The project focuses on cleaning and organizing raw data, uncovering patterns through exploratory analysis, and presenting key insights through clear, interactive visualizations to highlight how layoffs evolved over time.",
    imageSrc: LayoffsAnalysisImg,
    liveLink:
      "https://public.tableau.com/app/profile/kelly.wu4441/viz/Layoffs2024Dashboard/Dashboard1?publish=yes",
    githubLink: "https://github.com/wukellyy/Layoffs-Analysis",
    tags: [
      "MySQL",
      "Tableau",
      "Data Cleaning",
      "EDA",
      "Data Visualization",
      "Analytics",
    ],
  },
  {
    title: "City Jail Database Application",
    description:
      "A full-stack web application built as the final project for an Intro to Databases course, implementing CRUD operations for a city jail's relational data with role-based access control restricting table modifications to administrators.",
    imageSrc: CityJailImg,
    githubLink: "https://github.com/xhanghe/CSUY3083Project",
    tags: [
      "MySQL",
      "Flask",
      "HTML",
      "CSS",
      "Bootstrap",
      "Data Modeling",
      "APIs",
      "Authentication",
    ],
  },
  {
    title: "Word Strike",
    description:
      "An interactive p5.js game where players shoot falling letters to form prompted words, advancing through levels within a time limit and earning points based on completed words.",
    imageSrc: WordStrikeImg,
    liveLink: "https://openprocessing.org/sketch/2631960",
    githubLink:
      "https://github.com/wukellyy/CreativeCodingFinal_Spring25_KellyWu",
    tags: [
      "JavaScript",
      "Game Development",
      "APIs",
      "UI/UX",
      "Creative Coding",
    ],
  },
];
