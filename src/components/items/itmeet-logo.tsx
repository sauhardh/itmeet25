import Image from "next/image";
import Link from "next/link";

export default function ITMeetLogo({ w, h }: { w: number; h: number }) {
  return (
    <Link href="/">
      <Image
        src={"/logos/itmeet-logo-light.svg"}
        alt="logo"
        width={w}
        height={h}
      />
    </Link>
  );
}
