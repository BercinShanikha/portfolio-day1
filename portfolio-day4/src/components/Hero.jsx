import { useEffect, useState } from "react";

function Hero({ name }) {
  const titles = [
    "Aspiring Web Developer",
    "React Developer",
    "Frontend Enthusiast",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let current = titles[index];
    let charIndex = 0;

    const interval = setInterval(() => {
      setText(current.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === current.length) {
        clearInterval(interval);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % titles.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      id="hero"
      className="p-10 text-center min-h-[60vh] flex flex-col justify-center"
    >
      <h2 className="text-5xl font-bold">{name}</h2>

      <p className="mt-4 text-xl font-semibold">
        {text}
        <span>|</span>
      </p>
    </section>
  );
}

export default Hero;