import { CircleSvg } from "@/components/svg/CircleSvg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { Typography } from "../../components/ui/typography";

export const Hero = () => {
  return (
    <main className="relative m-auto my-2 flex min-h-[500px] w-full max-w-7xl items-center gap-4 px-8 max-lg:flex-col">
      <div className="relative flex flex-1 flex-col items-start gap-4 lg:gap-6 xl:gap-8">
        <Typography variant="h1" className="!leading-tight">
          Write the good word and{" "}
          <span className="inline-block -rotate-2 bg-foreground text-background">
            Grow your{" "}
            <span className="relative inline-block">
              <span>knowledge</span>
              <CircleSvg className="fill-primary" />
            </span>
          </span>
        </Typography>
        <Typography variant="large">
          What this Word is a game where you have to find the right word.
        </Typography>

        <Link
          href="#play"
          className={cn(buttonVariants({ size: "lg", variant: "default" }))}
        >
          <Rocket size={20} className="mr-2" /> Play Now
        </Link>
      </div>
    </main>
  );
};
