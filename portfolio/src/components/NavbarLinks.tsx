import React from "react";

const navLinks = [
  { id: "about-me", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
];

type NavbarLinksProps = {
  onLinkClick?: (sectionId: string) => void;
};

const NavbarLinks = ({ onLinkClick }: NavbarLinksProps) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (onLinkClick) {
      onLinkClick(sectionId);
    }
  };

  return (
    <nav className="absolute top-5 right-10 z-10 p-10 text-xl">
      <ul className="flex items-center space-x-6 text-white gap-6 font-semibold">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className="hover:text-gray-300 cursor-pointer"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "contact")}
            className="rounded-full border-2 border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
          >
            CONTACT ME
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLinks;
