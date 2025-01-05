import React from "react";

export default function Skills() {
  
  const programmingLanguages = ["Java", "JavaScript", "Python"];
  const frontendTechnologies = ["React", "Next"];
  const backendTechnologies = ["Node.js", "Express.js"];
  const databases = ["MySQL", "PostgreSQL", "IBM DB2"];

  const renderItemsWithHyphen = (items: string[]) => {
    return items.map((item, index) => (
      <React.Fragment key={index}>
        <span>{item}</span>
        {index < items.length - 1 && <span>-</span>}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex flex-col text-end font-light overflow-y-auto">
      <h1 className="text-2xl py-3">Programming Languages</h1>
      <div className="flex items-center justify-end gap-3">
        {renderItemsWithHyphen(programmingLanguages)}
      </div>
      <h1 className="text-2xl py-3">Frontend Technologies</h1>
      <div className="flex items-center justify-end gap-3">
        {renderItemsWithHyphen(frontendTechnologies)}
      </div>
      <h1 className="text-2xl py-3">Backend Technologies</h1>
      <div className="flex items-center justify-end gap-3">
        {renderItemsWithHyphen(backendTechnologies)}
      </div>
      <h1 className="text-2xl py-3">Databases</h1>
      <div className="flex items-center justify-end gap-3">
        {renderItemsWithHyphen(databases)}
      </div>
    </div>
  );
}