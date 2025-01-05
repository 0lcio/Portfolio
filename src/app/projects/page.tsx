import React from "react";

const projects = [
  {
    category: "Personal / Work",
    year: "2024",
    company: "Studio Riadatto",
    title: "MyRiadatto",
  },
  {
    category: "University",
    year: "2024",
    company: "UniMiB",
    title: "VoCi App",
  },
];

export default function Projects() {
  const personalWorkProjects = projects.filter(
    (project) => project.category === "Personal / Work"
  );
  const universityProjects = projects.filter(
    (project) => project.category === "University"
  );

  return (
    <div className="flex flex-col text-end gap-14 font-light overflow-y-auto text-sm md:text-base">
      <div>
        <h2 className="tracking-widest pb-4 md:pb-0">
          ■ UNIVERSITY
        </h2>
        {universityProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-end md:items-center justify-end md:gap-3"
          >
            <div className="flex gap-1">
              <p className="bg-[#0a0a0a]/85">{project.year}</p>
              <p className="bg-[#0a0a0a]/85"> - </p>
              <p className="bg-[#0a0a0a]/85">{project.company}</p>
              <p className="hidden md:block md:bg-[#0a0a0a]/85"> - </p>
            </div>
            <h1 className="text-2xl md:text-3xl bg-[#0a0a0a]/85">
              {project.title}
            </h1>
          </div>
        ))}
      </div>
      <div>
        <h2 className="tracking-widest pb-4 md:pb-0">
          ■ PERSONAL / WORK
        </h2>
        {personalWorkProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-end md:items-center justify-end md:gap-3"
          >
            <div className="flex gap-1">
              <p className="bg-[#0a0a0a]/85">{project.year}</p>
              <p className="bg-[#0a0a0a]/85"> - </p>
              <p className="bg-[#0a0a0a]/85">{project.company}</p>
              <p className="hidden md:block md:bg-[#0a0a0a]/85"> - </p>
            </div>
            <h1 className="text-2xl md:text-3xl bg-[#0a0a0a]/85">
              {project.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
