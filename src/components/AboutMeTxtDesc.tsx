const introJSX = (
  <>
    Hi, I'm Dylan Lewis - a full-time honors student studying{" "}
    <strong className="font-medium">Software Development</strong> at{" "}
    <a
      href="https://www.gcu.edu/degree-programs/bs-software-development"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-gray-300"
    >
      Grand Canyon University
    </a>
    .
  </>
);

export const aboutMeData = {
  intro: introJSX,
  listItems: [
    {
      title: "Problem Solver:",
      description:
        "I solve complex problems by creating intuitive and durable solutions.",
    },
    {
      title: "Value-Focused:",
      description:
        "I build functional software that delivers genuine business value.",
    },
    {
      title: "Quality Code:",
      description:
        "I write clean, maintainable code that supports long-term scalability and management.",
    },
    {
      title: "Adaptable & Determined:",
      description:
        "I excel in challenging environments, both independently and in team settings, using critical thinking and diligence to innovate.",
    },
  ],
};
