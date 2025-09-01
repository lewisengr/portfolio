import { forwardRef } from "react";

interface InfoSectionProps {
  intro: React.ReactNode;
  listItems: {
    title: string;
    description: string;
  }[];
}

export const InfoSectionDesc = forwardRef<HTMLDivElement, InfoSectionProps>(
  ({ intro, listItems }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-gradient-to-tl from-neutral-900 to-gray-800 p-8 md:p-16 lg:p-24"
      >
        <div className="max-w-8xl mx-auto">
          <p className="text-white text-2xl lg:text-3xl mb-8 text-center">
            {intro}
          </p>

          <ul className="space-y-4 max-w-6xl mx-auto">
            {listItems.map((item, index) => (
              <li key={index} className="text-white text-xl lg:text-2xl">
                <strong className="font-semibold">{item.title} </strong>
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);
