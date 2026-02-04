import { useState } from "react";
import { AuthorsAPI } from "../api/authors.api";

export default function CreateAuthorPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [biography, setBiography] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await AuthorsAPI.create({
        name,
        email,
        biography,
      });

      setMessage("Autor creado correctamente ");
      setName("");
      setEmail("");
      setBiography("");
    } catch (error) {
      setMessage("Error al crear autor ");
    }
  };

  return (
    <div>
      <h2>Crear Autor</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <textarea
            placeholder="Biografía"
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
          />
        </div>

        <button type="submit">Guardar</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
