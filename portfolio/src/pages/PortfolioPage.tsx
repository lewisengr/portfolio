import { forwardRef } from "react";
import PriceRightimg from "../assets/PriceRight.png";

const portfolioItems = [
  {
    title: "PriceRight",
    description: "test...",
    imgSrc: PriceRightimg,
    link: "#",
  },
  {
    title: "RISK",
    description: "test...",
    imgSrc: "",
    link: "#",
  },
  {
    title: "FilmVault",
    description: "test...",
    imgSrc: "",
    link: "https://filmvault.dev",
  },
  {
    title: "DisneyStats",
    description: "test...",
    imgSrc: "",
    link: "#",
  },
  {
    title: "Coming Soon...",
    description: "test...",
    imgSrc: "",
    link: "#",
  },
  {
    title: "Coming Soon...",
    description: "test...",
    imgSrc: "",
    link: "#",
  },
];

export const PortfolioPage = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-gradient-to-tl from-neutral-900 to-gray-800 p-8 py-24 md:p-16 lg:p-24"
    >
      <div className="w-full max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="inline-block border-2 border-white px-10 py-3 text-2xl font-semibold tracking-widest text-white">
            PORTFOLIO
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group block w-full max-w-md rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative">
                {/* Placeholder Image */}
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-300 group-hover:bg-opacity-70">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-300 mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});