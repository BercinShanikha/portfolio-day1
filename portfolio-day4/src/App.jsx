import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
  ];

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio built with React.",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Weather application using API.",
    },
    {
      id: 3,
      title: "School Management System",
      description: "School management project.",
    },
  ];

 return (
  <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-all">
    <Header />
    <Hero
      name="Bercin Shanikha"
      title="Aspiring Web Developer"
    />
    <About />
    <Skills skills={skills} />
    <Projects projects={projects} />
    <Contact />
  </div>
);
}

export default App;