import { FollowUsType } from "@/lib/sociallinks";

export default function SocialIcons({
  socials,
  customClass,
}: {
  socials: FollowUsType[];
  customClass?: string;
}) {
  return (
    <>
      {socials.map(({ Icon, href }: FollowUsType) => (
        <a
          key={href}
          href={href}
          rel="noopener noreferrer"
          className={`hover:scale-110 hover:text-gray-300 transition-all duration-500 ${customClass ? customClass : ""}`}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </>
  );
}
