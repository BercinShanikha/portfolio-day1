function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white text-black dark:bg-gray-800 dark:text-white p-6 rounded-lg max-w-md">
        <h2 className="text-2xl font-bold">{project.title}</h2>

        <p className="mt-4">{project.description}</p>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;