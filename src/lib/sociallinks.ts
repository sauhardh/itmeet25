import { ComponentType } from "react";
import {
  FaFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaDiscord,
} from "react-icons/fa6";

export type FollowUsType = {
  Icon: ComponentType<{ className?: string }>;
  href: string;
};

export const socialLinks: FollowUsType[] = [
  {
    Icon: FaDiscord,
    href: "https://discord.com/invite/bTG3p8Za4f?fbclid=IwY2xjawGo04ZleHRuA2FlbQIxMAABHQmHZabHEfWNH-kgOehhWC-7rebkB8zqb_XRiW3DQ5nLMsZQErZLbi0Ckg_aem_21zGRVqdu65pwVdp44T63g",
  },
  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/KUITMEET/",
  },
  {
    Icon: FaSquareInstagram,
    href: "https://www.instagram.com/kuitmeet/",
  },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/company/kuitmeet/",
  },
  {
    Icon: FaSquareXTwitter,
    href: "https://twitter.com/kuitmeet",
  },
];
