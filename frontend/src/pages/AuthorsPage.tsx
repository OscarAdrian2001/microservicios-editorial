import { useEffect, useState } from "react";
import { AuthorsAPI } from "../api/authors.api";
import type { Author } from "../types/author";

export const AuthorsPage = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAuthors = async () => {
      try {
        const data = await AuthorsAPI.getAll();
        setAuthors(data);
      } catch (err) {
        setError("Error al cargar autores");
      } finally {
        setLoading(false);
      }
    };

    loadAuthors();
  }, []);

  if (loading) return <p>Cargando autores...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Autores</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <strong>{author.name}</strong> — {author.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
