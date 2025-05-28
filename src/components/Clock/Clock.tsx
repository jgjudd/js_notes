import { useState, useEffect, SetStateAction } from "react";

export default function Clock() {
  const [time, setTime] = useState<SetStateAction<Date | null>>(null);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  if (time === null) return null;

  return (
    <section>
      <h1>Current Time</h1>
      <p>{time.toLocaleString()}</p>
    </section>
  );
}
