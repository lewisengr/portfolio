import { forwardRef } from "react";

export const InfoSectionFull = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="relative bg-gray-200 font-sans flex flex-col items-center justify-center px-8 py-24"
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

        <div className="flex flex-col lg:flex-row justify-center gap-12 text-left mb-16">
          <div className="flex flex-col items-start max-w-sm">
            <h3 className="text-xl font-bold mb-2 tracking-wider">DESIGN</h3>
            <p className="text-gray-600">
              I focus on creating clean, user-friendly interfaces that
              prioritize both functionality and visual appeal.
            </p>
          </div>

          <div className="flex flex-col items-start max-w-sm">
            <h3 className="text-xl font-bold mb-2 tracking-wider">
              DEVELOPMENT
            </h3>
            <p className="text-gray-600">
              I build responsive, efficient software solutions using modern
              technologies and standard coding practices.
            </p>
          </div>

          <div className="flex flex-col items-start max-w-sm">
            <h3 className="text-xl font-bold mb-2 tracking-wider">
              MAINTENANCE
            </h3>
            <p className="text-gray-600">
              I ensure long-term reliability by writing maintainable code and
              regularly updating projects to stay optimized and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
