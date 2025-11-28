"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  const expandTextHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.clientHeight < 200) {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + "px";
    }

    if (e.target.clientHeight > 200) {
      e.target.style.height = "auto";
      e.target.style.height = 200 + "px";

      e.target.scrollTo({ top: e.target.scrollHeight, behavior: "instant" });
    }
  };

  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full border-b border-muted-foreground bg-background px-3 py-2 text-base outline-none ring-offset-background transition duration-300 placeholder:text-muted-foreground focus:border-b-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      onChange={(e) => {
        expandTextHeight(e);
      }}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
