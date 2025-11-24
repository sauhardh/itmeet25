import { ComponentType } from "react";
import SocialIcons from "./SocialIcons";
import { FollowUsType } from "@/lib/sociallinks";

export default function FollowUs({ socials }: { socials: FollowUsType[] }) {
  return (
    <div className="rounded-3xl hidden lg:flex bg-linear-to-l from-blue to-green p-px shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
      <div
        className="text-white bg-[#171A23] p-2 px-4 rounded-3xl flex items-center z-20 gap-4
        shadow-inner shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)]"
      >
        <h1 className="text-sm">Follow us</h1>
        <SocialIcons socials={socials} />
      </div>
    </div>
  );
}
