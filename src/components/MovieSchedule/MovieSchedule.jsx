import { Container, Table, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./MovieSchedule.css";

const movies = [
  {
    id: 1,
    title: "Titanic",
    director: "James Cameron",
    country: "Internacional",
    functions: [
      { date: new Date("2025-03-15T14:00:00"), price: 100 },
      { date: new Date("2025-03-15T18:00:00"), price: 120 },
      { date: new Date("2025-03-15T21:30:00"), price: 150 },
    ],
  },
  {
    id: 2,
    title: "Inception",
    director: "Christopher Nolan",
    country: "Internacional",
    functions: [
      { date: new Date("2025-03-16T13:00:00"), price: 110 },
      { date: new Date("2025-03-16T17:00:00"), price: 130 },
      { date: new Date("2025-03-16T20:00:00"), price: 160 },
    ],
  },
  {
    id: 3,
    title: "El secreto de sus ojos",
    director: "Juan José Campanella",
    country: "Nacional",
    functions: [
      { date: new Date("2025-03-17T15:30:00"), price: 190 },
      { date: new Date("2025-03-17T19:30:00"), price: 110 },
      { date: new Date("2025-03-17T22:00:00"), price: 130 },
    ],
  },
];

const MovieSchedule = () => {
  const navigate = useNavigate();

  const handleEdit = (movieId, functionIndex) => {
    console.log(
      `Editar película ID ${movieId}, función index ${functionIndex}`
    );
    navigate(`/update-function`);
  };

  const handleDelete = (movieId, functionIndex) => {
    console.log(
      `Eliminar película ID ${movieId}, función index ${functionIndex}`
    );
  };

  const movieRows = movies.map((movie) => {
    const functionList = movie.functions.map((func, index) => (
      <div key={index} className="line-function-content">
        {func.date.toLocaleDateString()} -{" "}
        {func.date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}{" "}
        - <span className="ms-2 text-success">${func.price}</span>
        <div className="mt-2">
          <Button
            variant="warning"
            size="sm"
            onClick={() => handleEdit(movie.id, index)}
            className="btn-edit me-2"
          >
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDelete(movie.id, index)}
            className="btn-delete"
          >
            <i className="bi bi-x-circle"></i>
          </Button>
        </div>
      </div>
    ));

    return (
      <tr key={movie.id}>
        <td>{movie.title}</td>
        <td>{movie.director}</td>
        <td>{movie.country}</td>
        <td>{functionList}</td>
        <td>
          <Link to={`/movie/${movie.id}`}>
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
      <h2 className="text-center mb-4">Cartelera de Películas</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Película</th>
            <th>Director</th>
            <th>Origen</th>
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
