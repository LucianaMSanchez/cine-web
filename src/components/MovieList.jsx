import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Titanic",
    image:
      "https://play-lh.googleusercontent.com/560-H8NVZRHk00g3RltRun4IGB-Ndl0I0iKy33D7EQ0cRRwH78-c46s90lZ1ho_F1so=w240-h480-rw",
  },
  {
    id: 2,
    title: "Inception",
    image:
      "https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8",
  },
  {
    id: 3,
    title: "El secreto de sus ojos",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/4396cc2ce854e81eb1ffa97433856cc866ebd2cb01f612746633a06dd52809a9.jpg",
  },
  {
    id: 4,
    title: "Parasite",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/fb4358b042adbf87a337f58bfc44ca6516388f7d6ed9c69f174cc71e473dab08.jpg",
  },
  {
    id: 5,
    title: "Relatos salvajes",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/63a68d24b5bc35a08cb94a5bec39a58f3b8056c586c68839c63cdc73abf08d71.jpg",
  },
];

const MovieList = () => {
  return (
    <Row className="mt-4">
      {movies.map((movie) => (
        <Col key={movie.id} sm={4}>
          <Card>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                Ver Detalles
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
