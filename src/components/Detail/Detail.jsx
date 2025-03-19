import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Button, ListGroup } from "react-bootstrap";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [functions, setFunctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const movieResponse = await fetch(`http://localhost:5206/movies/${id}`);
        if (!movieResponse.ok) {
          throw new Error("Failed to fetch movie");
        }
        const movieData = await movieResponse.json();
        setMovie(movieData);

        const functionsResponse = await fetch(`http://localhost:5206/functions/movie/${id}`);
        if (!functionsResponse.ok) {
          throw new Error("Failed to fetch functions");
        }
        const functionsData = await functionsResponse.json();
        setFunctions(functionsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-5">Cargando...</p>;
  }

  if (error) {
    return <p className="text-center mt-5 text-danger">{error}</p>;
  }

  if (!movie) {
    return <p className="text-center mt-5">Película no encontrada</p>;
  }

  return (
    <Container className="movie-detail-container mt-4">
      <Card className="movie-detail-card">
        <Card.Img variant="top" src={movie.imageSliderUrl} className="movie-detail-image" />
        <Card.Body>
          <Card.Title className="text-center">{movie.name}</Card.Title>
          <Card.Text>{movie.description ?? ""}</Card.Text>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Origen:</strong> {movie.country}</p>

          <h5>Funciones disponibles:</h5>
          {functions.length > 0 ? (
            <ListGroup>
              {functions.map((func, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                  {new Date(func.date).toLocaleDateString()} - {new Date(func.date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  <span className="badge bg-success">${func.price}</span>
                  <Button variant="primary" size="sm">Comprar</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>No hay funciones disponibles.</p>
          )}

          <div className="text-center mt-3">
            <Link to="/" className="btn btn-secondary">Volver</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Detail;
