import { useParams, Link } from "react-router-dom";
import { Container, Card, Button, ListGroup } from "react-bootstrap";
import "./Detail.css";

const movies = [
  {
    id: 1,
    title: "Titanic",
    image:
      "https://play-lh.googleusercontent.com/560-H8NVZRHk00g3RltRun4IGB-Ndl0I0iKy33D7EQ0cRRwH78-c46s90lZ1ho_F1so=w240-h480-rw",
    description:
      "Una historia épica de amor y tragedia en el famoso barco Titanic.",
    country: "Internacional",
    director: "James Cameron",
    functions: [
      { date: new Date("2025-03-15T14:00:00"), price: 100 },
      { date: new Date("2025-03-15T18:00:00"), price: 120 },
      { date: new Date("2025-03-15T21:30:00"), price: 150 },
    ],
  },
  {
    id: 2,
    title: "Inception",
    image:
      "https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8",
    description:
      "Un ladrón con la habilidad de entrar en los sueños es contratado para implantar una idea.",
    country: "Internacional",
    director: "Christopher Nolan",
    functions: [
      { date: new Date("2025-03-16T13:00:00"), price: 110 },
      { date: new Date("2025-03-16T17:00:00"), price: 130 },
      { date: new Date("2025-03-16T20:00:00"), price: 160 },
    ],
  },
  {
    id: 3,
    title: "El secreto de sus ojos",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/4396cc2ce854e81eb1ffa97433856cc866ebd2cb01f612746633a06dd52809a9.jpg",
    description:
      "Un investigador judicial revive un caso de asesinato mientras lidia con sus propios sentimientos.",
    country: "Nacional",
    director: "Juan José Campanella",
    functions: [
      { date: new Date("2025-03-17T15:30:00"), price: 90 },
      { date: new Date("2025-03-17T19:30:00"), price: 110 },
      { date: new Date("2025-03-17T22:00:00"), price: 130 },
    ],
  },
];

const Detail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <p className="text-center mt-5">Película no encontrada</p>;
  }

  return (
    <Container className="movie-detail-container mt-4">
      <Card className="movie-detail-card">
        <Card.Img
          variant="top"
          src={movie.image}
          className="movie-detail-image"
        />
        <Card.Body>
          <Card.Title className="text-center">{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <p>
            <strong>Director:</strong> {movie.director}
          </p>
          <p>
            <strong>Origen:</strong> {movie.country}
          </p>

          <h5>Funciones disponibles:</h5>
          <ListGroup>
            {movie.functions.map((func, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                {func.date.toLocaleDateString()} -{" "}
                {func.date.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                <span className="badge bg-success">${func.price}</span>
                <Button
                  variant="secondary"
                  size="sm"
                  className="btn btn-primary btn-sm"
                >
                  Comprar
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="text-center mt-3">
            <Link to="/" className="btn btn-secondary">
              Volver
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Detail;
