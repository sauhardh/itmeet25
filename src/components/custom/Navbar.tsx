"use client";
import { useState, useEffect } from "react";
import FollowUs from "../items/follow-us";
import { ShoppingCart, ChevronDown } from "lucide-react";
import ITMeetLogo from "../items/itmeet-logo";
import Link from "next/link";
import { socialLinks } from "@/lib/sociallinks";

type SubItemsType = {
  id: number;
  title: string;
  url: string;
};

type NavItemsType = {
  id: number;
  title: string;
  url: string;
  subItems?: SubItemsType[];
};

const navItems: NavItemsType[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
    subItems: [
      { id: 1, title: "About", url: "#about" },
      { id: 2, title: "Sponsors", url: "#sponsors" },
      { id: 3, title: "FAQs", url: "#faqs" },
      { id: 4, title: "Map", url: "#locations" },
      { id: 5, title: "Contact", url: "#contacts" },
    ],
  },
  { id: 2, title: "Team", url: "/teams" },
  {
    id: 3,
    title: "Events",
    url: "/events",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);

  // function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 ${isScrolled ? "pt-3" : "pt-0"} flex justify-center items-center transition-all duration-500`}
    >
      <div
        className={`
      flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 shadow-lg 
      backdrop-blur-lg border border-white/10 transition-all duration-500 
      ease-in-out      ${isScrolled ? "bg-[#171A23]/80 max-w-6xl rounded-2xl scale-[0.98]" : "bg-[#171A23]/60 rounded-none scale-100"} w-full
    `}
      >
        {/* IT Meet logo */}
        <ITMeetLogo />

        {/*  NavItems  */}
        <div className="flex gap-5 justify-center items-center">
          {navItems.map(({ id, title, url, subItems }) => (
            <div key={id} className="relative group">
              <div
                className="flex items-center justify-center gap-2"
                onClick={() => setActive(url)}
              >
                <Link
                  key={url}
                  href={url}
                  className={`font-bold text-xl ${active === url ? "text-green" : ""}`}
                >
                  {title}
                </Link>
                {subItems && (
                  <ChevronDown className="w-4 h-4 bg-gray-800 text-green rounded-full hover:scale-95  " />
                )}
              </div>
              {/*DropDown*/}
              {subItems && subItems.length > 0 && (
                <div className=" absolute bg-border hidden group-hover:block items-start">
                  <div className="flex flex-col gap-2 text-lg font-bold py-3 pr-8 pl-2">
                    {subItems.map((subItem, index) => (
                      <Link
                        key={index}
                        href={subItem.url}
                        className="block px-5 hover:text-green"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Follow Us Items */}
        <div className="flex items-center justify-center gap-2">
          <FollowUs socials={socialLinks} />
          <div className="hidden lg:flex">
            <a
              href="https://kucc.blanxer.io/"
              className="hover:scale-110 hover:text-[#14C58F] transition-all duration-500"
            >
              <ShoppingCart className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
