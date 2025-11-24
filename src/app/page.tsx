import { CopyToClipboardButton } from "@/components/copy-to-clipboard-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GitHubLogo } from "@/components/ui/svgs/github-logo";
import { LinkedInLogo } from "@/components/ui/svgs/linkedin-logo";
import { LinkIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    role: "Software Developer AI Trainer",
    company: "Data Annotation",
    location: "Remote, US",
    duration: "October 2024 - Present",
    points: [
      "Trained and optimized artificial intelligence and machine learning models by implementing advanced algorithms, improving accuracy and performance across various software systems.",
      "Evaluated and debugged AI code outputs, identifying logic errors and optimizing algorithmic performance to enhance model precision and coding accuracy.",
      "Utilized a multitude of programming languages and libraries such as Python, Java, C, C++, pandas, OpenCV, and PyTorch to develop, test, and debug AI solutions, ensuring high-quality, scalable results.",
    ],
  },
  {
    role: "Instructor",
    company: "STEM exCEL",
    location: "Fairfax, VA",
    duration: "May 2024 - August 2024",
    points: [
      "Taught core programming concepts through Scratch, introducing students to logic and algorithms.",
      "Developed interactive coding challenges and mini-projects that strengthened computational thinking and creativity.",
      "Configured and maintained classroom systems, troubleshooting software and hardware for smooth sessions.",
    ],
  },
];

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Wizard Messenger",
    description:
      "Full‑stack real‑time messaging (React/Next.js, TypeScript, Node.js, Socket.IO) with cookie session auth (Better‑Auth) and MongoDB. REST endpoints for messages and friendships.",
    tags: ["Next.js", "TypeScript", "Socket.IO", "MongoDB"],
    link: "https://github.com/blnayan/wizardmessenger",
  },
  {
    title: "Attentive Home Care",
    description:
      "Responsive marketing site with integrated Calendly; automated scheduling reduced manual time by 70% (~$8k/yr). SEO + accessible UI increased inquiries/conversions by ~40%.",
    tags: ["React", "Next.js", "Calendly", "SEO"],
    link: "https://github.com/blnayan/attentive-home-care",
  },
  {
    title: "Chessboard",
    description:
      "Full‑stack chess web app (React, Node.js, Socket.IO) with move validation and real‑time board updates; custom responsive drag‑and‑drop UI.",
    tags: ["React", "Socket.IO", "Node.js"],
    link: "https://github.com/blnayan/chessboard",
  },
];

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C",
      "HTML",
      "CSS",
      "JSX",
      "TSX",
      "SQL",
    ],
  },
  {
    name: "Frameworks and Libraries",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "REST",
      "Socket.IO",
      "NumPy",
      "Pandas",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
    ],
  },
  {
    name: "Tools and Technologies",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "PostgreSQL",
      "MongoDB",
      "Vercel",
      "VS Code",
      "Zed",
      "Linux",
      "Windows",
      "MS Office",
    ],
  },
];

interface Degree {
  school: string;
  location: string;
  degreeMajor: string;
  graduationDate: string;
  gpa: number;
  honors?: string[];
  relevantCourses?: string[];
}

const education: Degree[] = [
  {
    school: "George Mason University",
    location: "Fairfax, VA",
    degreeMajor: "B.S. Information Technology",
    graduationDate: "December, 2025",
    gpa: 3.95,
    honors: ["Dean’s list all applicable semesters"],
    relevantCourses: [
      "Data Structures & Algorithms",
      "Database Programming",
      "Object Oriented Programming",
      "Applied IT Programming",
      "Information Security Fundamentals",
      "Mobile Development",
      "Systems Analysis and Design",
    ],
  },
];

// TODO: Convert content into JSON format
export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container py-16 grid md:grid-cols-2 gap-16 md:gap-8">
        <div className="w-full my-auto">
          <h1 className="text-4xl font-bold">Nayan Bhut</h1>
          <p className="mt-2">
            Undergrad @GMU and Software Developer / AI Trainer @Data Annotation
          </p>
          <div className="flex mt-2 gap-2 text-sm">
            <div className="flex gap-1 opacity-60">
              <MapPinIcon size={20} absoluteStrokeWidth />
              <p>United States</p>
            </div>
            <Link href="https://github.com/blnayan" target="_blank">
              <GitHubLogo
                className="opacity-60 hover:opacity-100"
                height={20}
                width={20}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/nayanbhut/" target="_blank">
              <LinkedInLogo
                className="opacity-60 hover:opacity-100"
                height={20}
                width={20}
              />
            </Link>
            <CopyToClipboardButton
              text="https://nayanbhut.me"
              className="hover:cursor-pointer"
            >
              <LinkIcon
                className="opacity-60 hover:opacity-100"
                size={20}
                absoluteStrokeWidth
              />
            </CopyToClipboardButton>
          </div>
        </div>
        <div className="w-full">
          <Card>
            <CardHeader className="flex">
              <CardTitle className="text-lg">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" asChild>
                <Link href="#experiences">Experiences</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#skills">Skills</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#education">Education</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <Separator className="container" />
      {/* Work Experience */}
      <section
        id="experiences"
        className="container py-16 space-y-8 scroll-m-16"
      >
        <h2 className="text-3xl font-semibold">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Card key={i}>
              <CardHeader className="flex gap-0 md:gap-4">
                <div className="space-y-1">
                  <CardTitle className="text-lg">
                    {exp.role}
                    <span className="font-black mx-1"> · </span>
                    {exp.company}
                  </CardTitle>
                  <CardDescription>
                    {exp.location}
                    <span className="md:hidden">
                      <span className="font-black mx-1"> · </span>
                      {exp.duration}
                    </span>
                  </CardDescription>
                </div>
                <CardDescription className="flex-1 text-end hidden md:block">
                  {exp.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="ml-4">
                <ul className="list-disc list-outside text-sm space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Projects */}
      <section id="projects" className="container py-16 space-y-8 scroll-m-16">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Card key={i}>
              <CardHeader className="flex gap-0 md:gap-4">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{project.description}</p>
                <div className="flex gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge variant="secondary" key={i}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex">
                <Button size="sm" variant="outline" asChild>
                  <Link href={project.link} target="_blank">
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      {/* Technical Skills */}
      <section id="skills" className="container py-16 space-y-8 scroll-m-16">
        <h2 className="text-3xl font-semibold">Technical Skills</h2>
        <div className="space-y-6">
          {skillCategories.map((category, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-lg">{category.name}:</h3>
              <div className="flex gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Education */}
      <section id="education" className="container py-16 space-y-8 scroll-m-16">
        <h2 className="text-3xl font-semibold">Education</h2>
        <div className="space-y-6"></div>
      </section>
    </>
  );
}
