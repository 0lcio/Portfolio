"use client";
import { useState, useEffect } from "react";

export function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Aggiorna ogni secondo
    return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
  }, []);

  return <p className="absolute top-[10px] right-9 px-2 md:top-7 md:right-20 md:px-5 bg-[#0a0a0a] text-sm md:text-base font-light">{time}</p>;
}
