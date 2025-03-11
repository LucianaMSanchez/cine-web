import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormUpdate.css";

const movies = [
  { title: "Titanic", director: "James Cameron" },
  { title: "Parasites", director: "Bong Joon-ho" },
  { title: "El secreto de sus ojos", director: "Juan José Campanella" },
  { title: "Relatos salvajes", director: "Damián Szifrón" },
  { title: "Inception", director: "Christopher Nolan" },
];

const FormUpdateFunction = ({ existingFunction }) => {
  const [selectedMovie, setSelectedMovie] = useState(existingFunction?.movie || "");
  const [selectedDirector, setSelectedDirector] = useState(existingFunction?.director || "");
  const [date, setDate] = useState(existingFunction?.date || new Date());
  const [price, setPrice] = useState(existingFunction?.price || "");

  useEffect(() => {
    if (existingFunction) {
      setSelectedMovie(existingFunction.movie);
      setSelectedDirector(existingFunction.director);
      setDate(existingFunction.date);
      setPrice(existingFunction.price);
    }
  }, [existingFunction]);

  const handleMovieChange = (event) => {
    const movie = event.target.value;
    const director = movies.find((m) => m.title === movie)?.director || "";
    setSelectedMovie(movie);
    setSelectedDirector(director);
  };

  const handleDirectorChange = (event) => {
    const director = event.target.value;
    const movie = movies.find((m) => m.director === director)?.title || "";
    setSelectedDirector(director);
    setSelectedMovie(movie);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Película: ${selectedMovie}\nDirector: ${selectedDirector}\nFecha: ${date}\nPrecio: ${price}`);
  };

  return (
    <Container className="form-container mt-4">
      <h2>Actualizar Función</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Película</Form.Label>
          <Form.Select value={selectedMovie} onChange={handleMovieChange}>
            <option value="">Selecciona una película</option>
            {movies.map((movie) => (
              <option key={movie.title} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Director</Form.Label>
          <Form.Select value={selectedDirector} onChange={handleDirectorChange}>
            <option value="">Selecciona un director</option>
            {movies.map((movie) => (
              <option key={movie.director} value={movie.director}>
                {movie.director}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fecha y Hora</Form.Label> <br />
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            showTimeSelect
            dateFormat="Pp"
            className="form-control"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Ingrese el precio"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Actualizar Función
        </Button>
      </Form>
    </Container>
  );
};

export default FormUpdateFunction;
