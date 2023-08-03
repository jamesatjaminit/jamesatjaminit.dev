import { IconContext } from "react-icons";
import { FaEnvelope, FaGithub } from "react-icons/fa/index";

const links = [
  {
    href: "https://github.com/jamesatjaminit",
    icon: <FaGithub />,
    label: "Github",
  },
  {
    href: "mailto:james@jaminit.co.uk",
    icon: <FaEnvelope />,
    label: "Email",
  },
] satisfies {
  href: string;
  icon: React.ReactNode;
  label: string;
}[];
export default function Icons() {
  return (
    <IconContext.Provider value={{ size: "18" }}>
      <div className="flex flex-row gap-2 justify-center">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover:scale-110">
            <span className="sr-only">{link.label}</span>
            {link.icon}
          </a>
        ))}
      </div>
    </IconContext.Provider>
  );
}
