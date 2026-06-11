import { useEffect, useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 border rounded"
          >
            {darkMode ? "☀" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl border px-3 py-1 rounded"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-3 mt-4 border-t pt-4">
          <a href="#hero" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;