import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col text-end gap-6 font-light overflow-y-auto text-sm md:text-base">
      <div className="flex flex-col md:flex-row items-center justify-end gap-3">
        <div className="flex gap-1">
          <p>2024</p>
          <p> - </p>
          <p>Studio Riadatto</p>
          <p className="hidden md:block"> - </p>
        </div>
        <h1 className="text-2xl md:text-3xl">MyRiadatto Dashboard</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-end gap-3">
        <div className="flex gap-1">
          <p>2024</p>
          <p> - </p>
          <p>UniMiB</p>
          <p className="hidden md:block"> - </p>
        </div>
        <h1 className="text-2xl md:text-3xl">VoCi App</h1>
      </div>
    </div>
  );
}
