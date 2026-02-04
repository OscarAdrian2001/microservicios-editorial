import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthorsPage } from "./pages/AuthorsPage";
import CreateAuthorPage from "./pages/CreateAuthorPage";
import CreatePublicationPage from "./pages/CreatePublicationPage";
import PublicationsPage from "./pages/PublicationsPage";

function App() {
  return (
    <BrowserRouter>
      
      {/* 🔹 Navegación simple */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Autores</Link> |{" "}
        <Link to="/publications">Publicaciones</Link> |{" "}
        <Link to="/create-author">Crear Autor</Link> |{" "}
        <Link to="/create-publication">Crear Publicación</Link>
      </nav>

      {/* 🔹 Rutas */}
      <Routes>
        <Route path="/" element={<AuthorsPage />} />
        <Route path="/create-author" element={<CreateAuthorPage />} />
        <Route path="/create-publication" element={<CreatePublicationPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
