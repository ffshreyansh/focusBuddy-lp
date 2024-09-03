import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-28">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="w-10 h-14"></div>
      <div className="flex flex-col items-center gap-4 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto">
        <Badge variant="outlined">Backed by YC</Badge>

        <h1 className="text-6xl text-center leading-tight">
          <span className="font-medium">Get work done</span> even when you're
          struggling to focus
        </h1>
        <p className="text-center w-2/3 text-muted-foreground font-sans">
          An AI productivity coach that stays on calls with you to avoid
          procrastination, recover from distractions, prevent burnout, and stay
          focused while you work
        </p>
        <div className="w-10 h-2"></div>
        <div className="flex items-center gap-3 w-1/2 ">
          <Input></Input>
          <Button>Try it out</Button>
        </div>
      </div>
      <div className="w-10 h-14"></div>

      <div className="w-2/3 bg-muted-foreground opacity-20 mx-auto h-[800px] rounded-xl"></div>
    </div>
  );
}
