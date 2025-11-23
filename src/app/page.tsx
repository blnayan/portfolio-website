import { CopyToClipboardButton } from "@/components/copy-to-clipboard-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GitHubLogo } from "@/components/ui/svgs/github-logo";
import { LinkedInLogo } from "@/components/ui/svgs/linkedin-logo";
import { LinkIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const workExperience = [
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
          <Card className="py-4 rounded-md gap-4">
            <CardHeader className="px-4 flex">
              <CardTitle className="text-lg">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="px-4 grid gap-4 grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" asChild>
                <Link href="#work-experience">Experiences</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#technical-skills">Skills</Link>
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
      <section id="work-experience" className="container py-16 space-y-8">
        <h2 className="text-3xl font-semibold">Work Experience</h2>
        <div className="space-y-6">
          {workExperience.map((exp, i) => (
            <Card key={i} className="py-4 rounded-md gap-4">
              <CardHeader className="px-4 flex gap-0 md:gap-4">
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
              <CardContent className="px-4 ml-4">
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
    </>
  );
}
