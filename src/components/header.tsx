import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "#experiences", label: "Experiences" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export function Header({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      className={cn("border-b sticky top-0 bg-background z-10", className)}
      {...props}
    >
      <div className="container flex h-14 items-center">
        <h1 className="font-semibold">Nayan Bhut</h1>
        <div className="flex flex-1 justify-end">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Nav */}
          <Drawer>
            <DrawerTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Navigation</DrawerTitle>
                  <DrawerDescription>
                    Explore my portfolio sections.
                  </DrawerDescription>
                </DrawerHeader>
                <nav className="flex flex-col gap-2 p-4">
                  {links.map((link) => (
                    <DrawerClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="flex h-10 w-full items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 border"
                      >
                        {link.label}
                      </Link>
                    </DrawerClose>
                  ))}
                </nav>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
