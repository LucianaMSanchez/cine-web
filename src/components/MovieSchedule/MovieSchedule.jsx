import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./MovieSchedule.css";

const API_URL_FUNCTIONS = "http://localhost:5206/functions";

const MovieSchedule = () => {
  const navigate = useNavigate();
  const [functions, setFunctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFunctions = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(API_URL_FUNCTIONS);
        if (!response.ok) {
          throw new Error("Error al obtener funciones.");
        }
        const data = await response.json();
        setFunctions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFunctions();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleEdit = (id) => {
    navigate(`/update-function/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta función?")) {
      try {
        const response = await fetch(`${API_URL_FUNCTIONS}/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Error al eliminar la función");
        }

        setFunctions((prevFunctions) =>
          prevFunctions.map((movie) => ({
            ...movie,
            functions: movie.functions.filter((func) => func.id !== id),
          }))
        );

        alert("Función eliminada con éxito");
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    }
  };

  const movieRows = functions.map((movie) => {
    const functionRows = movie.functions.map((func, index) => (
      <div key={index} className="line-function-content">
        {func.date} - {func.time} -{" "}
        <span className="ms-2 text-success">${func.price}</span>
        <div className="mt-2">
          <Button
            variant="warning"
            size="sm"
            onClick={() => handleEdit(func.id)}
            className="btn-edit me-2"
          >
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDelete(func.id)}
            className="btn-delete"
          >
            <i className="bi bi-x-circle"></i>
          </Button>
        </div>
      </div>
    ));

    return (
      <tr key={movie.movieName}>
        <td>{movie.movieName}</td>
        <td>{movie.functions[0]?.director}</td>
        <td>{functionRows}</td>
        <td>
          <Link to={`/movie/${movie.functions[0]?.movieId}`}>
            <Button variant="primary" size="sm" className="btn-detail">
              Ver Detalles
            </Button>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <Container className="container-table-schedule mt-4">
      <h2 className="text-center mb-4 text-white">Cartelera de Películas</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Película</th>
            <th>Director</th>
            <th>Funciones</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>{movieRows}</tbody>
      </Table>

      <div className="text-center mt-3">
        <Link to="/" className="btn btn-secondary">
          Volver
        </Link>
      </div>
    </Container>
  );
};

export default MovieSchedule;
