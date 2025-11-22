import { cn } from "@/lib/utils";

export function Footer({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer className={cn("border-t", className)} {...props}>
      <div className="container flex h-12 items-center">
        <h1 className="text-sm text-muted-foreground">© 2025 Nayan Bhut</h1>
      </div>
    </footer>
  );
}
