"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Badge } from "./ui/badge";

export function CopyToClipboardButton({
  text,
  onClick,
  ...props
}: { text: string } & React.ComponentProps<"button">) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleCopy();
    if (onClick) onClick(event);
  };

  return (
    <div className="relative">
      <button onClick={handleClick} {...props} />
      {copied && (
        <Badge className="text-foreground bg-green-700 overflow-visible absolute top-full left-1/2 -translate-x-1/2 mt-2 after:bottom-full after:left-1/2 after:absolute after:border-6 after:-ml-[6px] after:border-transparent after:border-b-green-700">
          Copied
        </Badge>
      )}
    </div>
  );
}
