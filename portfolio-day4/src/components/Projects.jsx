import { useState } from "react";
import Modal from "./Modal";

function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="p-10">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="grid gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 border rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white shadow-md"
          >
            <h3 className="font-bold text-xl">{project.title}</h3>

            <p className="mt-2">{project.description}</p>

            <button
              onClick={() => setSelectedProject(project)}
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Project
            </button>
          </div>
        ))}
      </div>

      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;