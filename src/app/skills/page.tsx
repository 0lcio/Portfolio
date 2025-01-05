import React from "react";

export default function Skills() {

  const programmingLanguages = ["Java", "JavaScript", "TypeScript", "Python"];
  const frontendTechnologies = ["React", "Next.js", "Tailwind CSS"];
  const backendTechnologies = ["Node.js", "Express.js", "REST API"]; 
  const databases = ["MySQL", "PostgreSQL", "IBM DB2"];

  const renderItemsWithHyphen = (items: string[]) => {
    return items.map((item, index) => (
      <React.Fragment key={index}>
        <span className="bg-[#0a0a0a]/85">{item}</span>
        {index < items.length - 1 && <span className="bg-[#0a0a0a]/85">-</span>}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex flex-col text-end font-light overflow-y-auto">
      <h2 className="tracking-widest">■ PROGRAMMING LANGUAGES</h2>
      <div className="flex items-center text-sm md:text-base gap-1 md:gap-3 mb-5 justify-end bg-[#0a0a0a]/85">
        {renderItemsWithHyphen(programmingLanguages)}
      </div>
      <h2 className="tracking-widest">■ FRONTEND</h2>
      <div className="flex items-center text-sm md:text-base gap-1 md:gap-3 justify-end mb-5">
        {renderItemsWithHyphen(frontendTechnologies)}
      </div>
      <h2 className="tracking-widest">■ BACKEND</h2>
      <div className="flex items-center text-sm md:text-base gap-1 md:gap-3 justify-end mb-5">
        {renderItemsWithHyphen(backendTechnologies)}
      </div>
      <h2 className="tracking-widest">■ DATABASES</h2>
      <div className="flex items-center text-sm md:text-base gap-1 md:gap-3 justify-end">
        {renderItemsWithHyphen(databases)}
      </div>
    </div>
  );
}