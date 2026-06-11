function Skills({ skills }) {
  return (
    <section id="skills" className="p-10">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-md text-center font-semibold
                       bg-white text-black
                       dark:bg-gray-800 dark:text-white
                       border"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;