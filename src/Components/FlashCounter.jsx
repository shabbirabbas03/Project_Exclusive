import React, { useState, useEffect } from "react";
const FlashCounter = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endTime = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);

    const updateCountdown = () => {
      const now = new Date();
      const remainingTime = endTime - now;

      if (remainingTime < 0) {
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-flow-col gap-6 text-center auto-cols-max py-8">
      {Object.entries(countdown).map(([label, value]) => (
        <div
          className="flex flex-col gap-1 bg-white btn-outline btn btn-circle text-xs btn-lg text-black"
          key={label}
        >
          <span>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
          <span className="countdown text-2xl">
            <span style={{ "--value": value }}></span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default FlashCounter;
