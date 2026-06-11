import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section id="contact" className="p-10">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {errors.name && (
          <p className="text-red-500">{errors.name}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {errors.email && (
          <p className="text-red-500">{errors.email}</p>
        )}

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {errors.message && (
          <p className="text-red-500">{errors.message}</p>
        )}

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </form>

      {success && (
        <p className="mt-4 text-green-600 font-semibold">
          {success}
        </p>
      )}
    </section>
  );
}

export default Contact;