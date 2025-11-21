import { ComponentType } from "react";
import SocialIcons from "./SocialIcons";
import { FollowUsType } from "@/lib/sociallinks";

export default function FollowUs({ socials }: { socials: FollowUsType[] }) {
  return (
    <div className="rounded-3xl hidden lg:flex bg-linear-to-l from-[#369FFF] to-[#17C58F] p-px">
      <div className="text-white bg-[#171A23] p-2 px-4 rounded-3xl flex items-center z-20 gap-4">
        <h1 className="text-sm">Follow us</h1>
        <SocialIcons socials={socials} />
      </div>
    </div>
  );
}
