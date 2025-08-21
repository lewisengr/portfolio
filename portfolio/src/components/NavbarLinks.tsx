import { Link } from "react-router-dom";

const navLinks = [
  { path: "/about-me", label: "About Me" },
  { path: "/skills", label: "Skills" },
  { path: "/portfolio", label: "Portfolio" },
];

function NavbarLinks() {
  return (
    <nav className="absolute top-5 right-10 z-10 p-10 text-xl">
      <ul className="flex items-center space-x-6 text-white gap-6 font-semibold">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="hover:text-gray-300">
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/contact-info"
            className="rounded-3xl bg-white px-6 py-3 font-bold text-black hover:bg-gray-200"
          >
            CONTACT ME
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarLinks;