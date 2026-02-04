import { useEffect, useState } from "react";
import { PublicationsAPI } from "../api/publications.api";
import type { Publication } from "../types/publication";

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    PublicationsAPI.getAll()
      .then(setPublications)
      .catch(() => setError("Error al cargar publicaciones"));
  }, []);

  return (
    <div>
      <h2>Listado de Publicaciones</h2>

      {error && <p>{error}</p>}

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Categoría</th>
            <th>Autor ID</th>
          </tr>
        </thead>
        <tbody>
          {publications.map((pub) => (
            <tr key={pub.id}>
              <td>{pub.id}</td>
              <td>{pub.title}</td>
              <td>{pub.category}</td>
              <td>{pub.authorId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
