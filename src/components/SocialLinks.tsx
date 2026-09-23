import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LinktreeIcon } from "@/components/icons/LinktreeIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { TiktokIcon } from "@/components/icons/TiktokIcon";
import { XIcon } from "@/components/icons/XIcon";
import { YoutubeIcon } from "@/components/icons/YoutubeIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ComponentType, SVGProps } from "react";

const socialLinks: {
  name: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ismailvali/",
    icon: LinkedinIcon,
  },
  {
    name: "X",
    href: "https://x.com/ismailvali_",
    icon: XIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ismailvali_/",
    icon: InstagramIcon,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ismailvali_",
    icon: TiktokIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ismailvali_",
    icon: YoutubeIcon,
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/Ismailvali",
    icon: LinktreeIcon,
  },
];

type SocialLinksProps = {
  variant?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
};

export function SocialLinks({
  variant = "light",
  size = "md",
  className,
}: SocialLinksProps) {
  const isDark = variant === "dark";
  const isSm = size === "sm";

  return (
    <div className={cn("flex items-center", isSm ? "gap-1.5" : "gap-4", className)}>
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <Button
          key={name}
          asChild
          size="icon"
          variant={isDark ? "default" : "outline"}
          className={cn(
            "rounded-full",
            isSm && "size-8",
            isDark && "connect-section-icon-button"
          )}
        >
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
            <Icon className={isSm ? "size-4" : "size-5"} />
          </a>
        </Button>
      ))}
    </div>
  );
}
