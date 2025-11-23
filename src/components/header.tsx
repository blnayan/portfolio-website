import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
];

export function Header({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      className={cn("border-b sticky top-0 bg-background", className)}
      {...props}
    >
      <div className="container flex h-14 items-center">
        <h1 className="font-semibold">Nayan Bhut</h1>
        <nav className="flex flex-1 justify-end gap-1">
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
      </div>
    </header>
  );
}
