import Image from "next/image";
import { FaEnvelope } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import SocialIcons from "../items/SocialIcons";
import { socialLinks } from "@/lib/sociallinks";

export default function Footer() {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full flex justify-around items-center">
        <div className="flex flex-col gap-12">
          <div className="flex gap-10">
            <Image
              src="/logos/kucc-logo.webp"
              alt="KUCC Logo"
              width={80}
              height={60}
            />
            <Image
              src="/logos/ku-logo.svg"
              alt="ku-logo"
              width={60}
              height={60}
            />
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
              9847422000 / 9762513456
            </span>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-bold">Vist Our Socials</h2>
            <div className="flex gap-2 ">
              <SocialIcons
                socials={socialLinks}
                customClass="bg-gray-800 p-2 rounded-full"
              />
            </div>
          </div>

          <pre className="text-sm text-gray-400">
            Copyright © 2025 IT Meet | All rights reserved.
          </pre>
        </div>

        <div className="flex flex-col font-bold gap-7 text-lg">
          <span>Brand Guidelines</span>
          <span>Brand Assest</span>
          <span className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-blue to-green">
            #GeekOutInStyle
          </span>
        </div>
      </div>
    </div>
  );
}
