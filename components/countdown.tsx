"use client";
import React, { useEffect, useState } from "react";
import Reveal from "./reveal";

function Countdown() {
  const [reveal, setReveal] = useState(false);
  const [days, setDays] = useState(7);
  const [hours, setHours] = useState(14);
  const [minutes, setMinutes] = useState(20);
  const [seconds, setSeconds] = useState(34);

  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date("7/10/2023 23:30:00");
      const now = new Date();

      let difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setReveal(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return reveal ? (
    <Reveal />
  ) : (
    <p className="w-[full] h-[29px] text-center text-[#416CB1] text-sm font-black uppercase tracking-[0.2rem] drop-shadow-[0_0_8px_rgba(76,119,189,1)]">
      {days}d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      {hours}hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {minutes}m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{" "}
      {seconds}s
    </p>
  );
}

export default Countdown;
