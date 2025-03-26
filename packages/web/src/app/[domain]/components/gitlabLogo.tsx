import gitlabLogoLight from "@/public/gitlab_logo_light.png";
import gitlabLogoDark from "@/public/gitlab_logo_dark.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GitlabLogoProps {
    className?: string;
}

export const GitlabLogo = ({ className }: GitlabLogoProps) => {
    return (
        <>
            <Image
                src={gitlabLogoDark}
                className={cn("h-32 w-auto hidden dark:block", className)}
                alt={"Gitlab logo"}
                priority={true}
            />
            <Image
                src={gitlabLogoLight}
                className={cn("h-32 w-auto block dark:hidden", className)}
                alt={"Gitlab logo"}
                priority={true}
            />
        </>
    )
};