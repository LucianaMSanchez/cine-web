import { useEffect, useState } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const API_URL_MOVIES = "http://localhost:5206/movies";
const API_URL_MOVIES_BY_COUNTRY = "http://localhost:5206/movies/country/1";
const API_URL_MOVIES_INTERNATIONAL = "http://localhost:5206/movies/country";

const MovieList = () => {
  const [filter, setFilter] = useState("all");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      let url = API_URL_MOVIES;
      if (filter === "national") {
        url = API_URL_MOVIES_BY_COUNTRY;
      } else if (filter === "international") {
        url = API_URL_MOVIES_INTERNATIONAL;
      } else if (filter === "all") {
        url = API_URL_MOVIES;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener películas.");
        }
        const data = await response.json();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [filter]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const onFilterClick = (filterType) => {
    setFilter(filterType);
  };

  const movieCards = movies.map((movie) => (
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
