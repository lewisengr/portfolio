import { forwardRef } from "react";

const technicalSkills = [
  {
    name: "Java",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: "C#",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: "JavaScript",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: "TypeScript",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: "HTML",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: "CSS",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: "React",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: "Vite",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: "Git",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: "Figma",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: "Azure",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: ".NET",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
];

const personalSkills = [
  {
    name: "Chess",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: "Weightlifting",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: "Basketball",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
  },
  {
    name: "Investing",
    imgSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=Logo",
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

        <div>
          <h2 className="inline-block border-2 border-black px-10 py-3 text-2xl font-semibold tracking-widest">
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
