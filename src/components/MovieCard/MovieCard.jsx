import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <Card className="movie-card">
      <Card.Img variant="top" src={movie.image} className="movie-image" />
      <Card.Body className="text-center">
        <Card.Title className="movie-title">{movie.title}</Card.Title>
        <Link to={`/movie/${movie.id}`} className="btn btn-primary btn-sm">
          Tickets!
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
