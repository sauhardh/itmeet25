import Image from "next/image";
import { FaEnvelope } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import SocialIcons from "../items/SocialIcons";
import { socialLinks } from "@/lib/sociallinks";
import ITMeetLogo from "../items/itmeet-logo";
import Link from "next/link";

export default function Footer() {
  function copyright() {
    return (
      <p className="text-xs text-gray-400">
        Copyright © 2025 IT Meet | All rights reserved.
      </p>
    );
  }
  return (
    <div className="flex flex-col items-center py-20 text-sm">
      <div className="w-full flex md:flex-row flex-col justify-around md:items-center gap-16 md:pl-0 sm:pl-14 pl-10">
        <div className="flex flex-col gap-14 py-5 ">
          <div className="flex gap-10 items-center">
            <Link href={"https://kucc.ku.edu.np/"} target="_blank">
              <Image
                src="/logos/kucc-logo.webp"
                alt="KUCC Logo"
                width={80}
                height={60}
              />
            </Link>
            <ITMeetLogo w={80} h={80} />
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex gap-3  items-center">
              <div className="bg-gray-800 p-2 rounded-full">
                <FaEnvelope />
              </div>
              itmeet@ku.edu.np
            </span>
            <span className="flex gap-3 items-center">
              <div className="bg-gray-800 p-2 rounded-full">
                <IoIosCall />
              </div>
              9821948158 / 9762513456
            </span>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-semibold">Vist Our Socials</h2>
            <div className="flex gap-2 ">
              <SocialIcons
                socials={socialLinks}
                customClass="bg-gray-800 p-2 rounded-full"
              />
            </div>
          </div>

          <div className="hidden md:block">{copyright()}</div>
        </div>

        <div className="flex flex-col py-5 font-semibold gap-7 text-lg ">
          <span>Brand Guidelines</span>
          <span>Brand Assest</span>
          <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-blue to-green">
            #GeekOutInStyle
          </span>
          <div className="block md:hidden font-normal pt-5">{copyright()}</div>
        </div>
      </div>
    </div>
  );
}
