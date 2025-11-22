import { CopyToClipboardButton } from "@/components/copy-to-clipboard-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GitHubLogo } from "@/components/ui/svgs/github-logo";
import { LinkedInLogo } from "@/components/ui/svgs/linkedin-logo";
import { LinkIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// TODO: Convert content into JSON format
export default function Home() {
  return (
    <>
      <div className="container py-16 grid md:grid-cols-2 gap-16 md:gap-8">
        <div className="w-full my-auto">
          <h1 className="text-4xl font-bold">Nayan Bhut</h1>
          <p className="mt-2">
            Undergrad @GMU and Software Developer / AI Trainer @Data Annotation
          </p>
          <div className="flex mt-2 gap-2 text-sm">
            <div className="flex gap-1 opacity-60">
              <MapPinIcon height={20} width={20} />
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
                height={20}
                width={20}
              />
            </CopyToClipboardButton>
          </div>
        </div>
        <div className="w-full">
          <Card className="py-4 rounded-md gap-4">
            <CardHeader className="px-4 flex">
              <CardTitle className="leading-6">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="px-4 grid gap-4 grid-cols-2 md:grid-cols-4">
              <Button variant="outline" asChild>
                <Link href="#experience">Experience</Link>
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
      </div>
      <Separator className="container" />
      <div className="container py-16">
        <h2 className="text-3xl font-semibold">Experience</h2>
      </div>
    </>
  );
}
