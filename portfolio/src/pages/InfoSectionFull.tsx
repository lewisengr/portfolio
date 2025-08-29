import { forwardRef } from "react";
import javaimg from "../assets/java-img.png";
import csharpimg from "../assets/csharp-img.png";
import JSimg from "../assets/js-img.png";
import TSimg from "../assets/ts-img.png";
import HTMLimg from "../assets/html-img.png";
import CSSimg from "../assets/css-img.png";
import Reactimg from "../assets/react-img.png";
import Viteimg from "../assets/vite-img.png";
import Gitimg from "../assets/git-img.png";
import Figmaimg from "../assets/figma-img.png";
import Azureimg from "../assets/azure-img.png";
import DotNetimg from "../assets/dotnet-img.png";
import Chessimg from "../assets/chess-img.png";
import Weightliftingimg from "../assets/weightlifting-img.png";
import Basketballimg from "../assets/basketball-img.png";
import Stocksimg from "../assets/stocks-img.png";

const technicalSkills = [
  {
    name: "Java",
    imgSrc: javaimg,
  },
  {
    name: "C#",
    imgSrc: csharpimg,
  },
  {
    name: "JavaScript",
    imgSrc: JSimg,
  },
  {
    name: "TypeScript",
    imgSrc: TSimg,
  },
  {
    name: "HTML",
    imgSrc: HTMLimg,
  },
  {
    name: "CSS",
    imgSrc: CSSimg,
  },
  {
    name: "React",
    imgSrc: Reactimg,
  },
  {
    name: "Vite",
    imgSrc: Viteimg,
  },
  {
    name: "Git",
    imgSrc: Gitimg,
  },
  {
    name: "Figma",
    imgSrc: Figmaimg,
  },
  {
    name: "Azure",
    imgSrc: Azureimg,
  },
  {
    name: ".NET",
    imgSrc: DotNetimg,
  },
];

const personalSkills = [
  {
    name: "Chess",
    imgSrc: Chessimg,
  },
  {
    name: "Weightlifting",
    imgSrc: Weightliftingimg,
  },
  {
    name: "Basketball",
    imgSrc: Basketballimg,
  },
  {
    name: "Investing",
    imgSrc: Stocksimg,
  },
];

const SkillCard = ({ name, imgSrc }: { name: string; imgSrc: string }) => (
  <div className="flex flex-col items-center justify-center gap-4">
    <div className="w-24 h-24">
      <img
        src={imgSrc}
        alt={`${name} logo`}
        className="object-contain w-full h-full"
      />
    </div>
    <p className="text-lg font-semibold text-gray-800">{name}</p>
  </div>
);

export const InfoSectionFull = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="relative min-h-screen bg-gray-200 font-sans flex flex-col items-center justify-center p-8 md:p-16"
    >
      <div className="w-full max-w-5xl mx-auto text-center">
        <div className="mb-10">
          <h2 className="inline-block border-2 border-black px-10 py-3 text-2xl font-semibold tracking-widest">
            ABOUT ME
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-gray-700 max-w-xl mx-auto mb-16">
          I'm recognized for my strong time management, sharp problem-solving
          skills, and a consistent drive to exceed expectations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left mb-16">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-2 tracking-wider">DESIGN</h3>
            <p className="text-gray-600">
              I focus on creating clean, user-friendly interfaces that
              prioritize both functionality and visual appeal.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-2 tracking-wider">
              DEVELOPMENT
            </h3>
            <p className="text-gray-600">
              I build responsive, efficient software solutions using modern
              technologies and standard coding practices.
            </p>
          </div>

          <div className="flex flex-col items-start md:col-span-2 lg:col-span-1 md:justify-self-center">
            <h3 className="text-xl font-bold mb-2 tracking-wider">
              MAINTENANCE
            </h3>
            <p className="text-gray-600">
              I ensure long-term reliability by writing maintainable code and
              regularly updating projects to stay optimized and secure.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="inline-block border-2 border-black px-12 py-3 text-2xl font-semibold tracking-widest mb-16">
            SKILLS
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mb-16">
            {technicalSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                imgSrc={skill.imgSrc}
              />
            ))}
          </div>
          <div className="w-24 h-px bg-gray-400 mx-auto my-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            {personalSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                imgSrc={skill.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
