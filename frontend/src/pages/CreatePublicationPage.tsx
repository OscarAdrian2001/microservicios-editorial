import { useEffect, useState } from "react";
import { AuthorsAPI } from "../api/authors.api";
import { PublicationsAPI } from "../api/publications.api";
import type { Author } from "../types/author";
import type { Publication } from "../types/publication";

export default function CreatePublicationPage() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [form, setForm] = useState<Publication>({
    title: "",
    content: "",
    authorId: 0,
    category: "",
  });

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    AuthorsAPI.getAll().then(setAuthors);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      await PublicationsAPI.create({
        ...form,
        authorId: Number(form.authorId),
      });
      setMessage("Publicación creada correctamente");
    } catch (error: any) {
      setMessage(
        error?.response?.data?.message || " Error al crear publicación"
      );
    }
  };

  return (
    <div>
      <h2>Crear Publicación</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          name="content"
          placeholder="Contenido"
          value={form.content}
          onChange={handleChange}
          required
        />

        <select
          name="authorId"
          value={form.authorId}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione autor</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione categoría</option>
          <option value="NOVELA">Novela</option>
          <option value="CUENTO">Cuento</option>
          <option value="POESIA">Poesía</option>
        </select>


        <button type="submit">Crear</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
