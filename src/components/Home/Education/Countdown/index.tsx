"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date (you can customize this)
    const targetDate = new Date("2026-03-10T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    { id: "days", value: timeLeft.days, label: "Days" },
    { id: "hours", value: timeLeft.hours, label: "Hours" },
    { id: "minutes", value: timeLeft.minutes, label: "Minutes" },
    { id: "seconds", value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section
      className="py-20 lg:py-0"
      data-sal="slide-up"
      data-sal-duration="800"
      data-sal-delay="200"
    >
      <div className="container">
        <div className="bg-[#481938] py-15 rounded-[40px] border-b-7 border-r-7 md:-mt-30 border-[#f5e900] text-white">
          <div className="grid grid-cols-12 gap-6">
            {countdownItems.map((item) => (
              <div
                key={item.id}
                className="col-span-12 lg:col-span-3 sm:col-span-6"
              >
                <div className="text-center">
                  <h2 className="font-bold text-[70px] mb-2" id={item.id}>
                    {item.value}
                  </h2>
                  <p className="text-xl text-gray-300">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
