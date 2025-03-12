import { useState } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const movies = [
  {
    id: 1,
    title: "Titanic",
    image:
      "https://play-lh.googleusercontent.com/560-H8NVZRHk00g3RltRun4IGB-Ndl0I0iKy33D7EQ0cRRwH78-c46s90lZ1ho_F1so=w240-h480-rw",
    country: "international",
  },
  {
    id: 2,
    title: "Inception",
    image:
      "https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8",
    country: "international",
  },
  {
    id: 3,
    title: "El secreto de sus ojos",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/4396cc2ce854e81eb1ffa97433856cc866ebd2cb01f612746633a06dd52809a9.jpg",
    country: "national",
  },
  {
    id: 4,
    title: "Parasite",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/fb4358b042adbf87a337f58bfc44ca6516388f7d6ed9c69f174cc71e473dab08.jpg",
    country: "international",
  },
  {
    id: 5,
    title: "Relatos salvajes",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/63a68d24b5bc35a08cb94a5bec39a58f3b8056c586c68839c63cdc73abf08d71.jpg",
    country: "national",
  },
];

const MovieList = () => {
  const [filter, setFilter] = useState("all");

  const onFilterClick = (filterType) => {
    setFilter(filterType);
  };

  const filteredMovies =
    filter === "all"
      ? movies
      : movies.filter((movie) => movie.country === filter);

  const movieCards = filteredMovies.map((movie) => (
    <Col
      key={movie.id}
      xs={6}
      sm={4}
      md={3}
      lg={2}
      className="movie-card-content mb-4"
    >
      <MovieCard movie={movie} />
    </Col>
  ));

  return (
    <>
      <Dropdown className="dropdown-filter">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Filtrar
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => onFilterClick("all")}>
            Todos
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onFilterClick("national")}>
            Nacionales
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onFilterClick("international")}>
            Internacionales
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Row className="mt-4 justify-content-around">{movieCards}</Row>
    </>
  );
};

export default MovieList;
