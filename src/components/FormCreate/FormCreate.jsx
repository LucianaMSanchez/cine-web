import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import DatePicker from "react-datepicker";
import {
  validatePrice,
  validateDate,
  validateDirectorFunctions,
  validateInternationalMovieFunctions,
} from "../../utils/validators";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormCreate.css";

const movies = [
  { title: "Titanic", director: "James Cameron", isInternational: true },
  { title: "Parasites", director: "Bong Joon-ho", isInternational: true },
  {
    title: "El secreto de sus ojos",
    director: "Juan José Campanella",
    isInternational: false,
  },
  {
    title: "Relatos salvajes",
    director: "Damián Szifrón",
    isInternational: false,
  },
  { title: "Inception", director: "Christopher Nolan", isInternational: true },
];

const FormCreateFunction = () => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedDirector, setSelectedDirector] = useState("");
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({
    movie: "",
    director: "",
    date: "",
    price: "",
  });

  const existingFunctions = [
    { director: "James Cameron", date: new Date("2025-03-12") },
    { director: "Bong Joon-ho", date: new Date("2025-03-12") },
    { director: "Juan José Campanella", date: new Date("2025-03-11") },
  ];

  const handleMovieChange = (event) => {
    const movie = event.target.value;
    const director = movies.find((m) => m.title === movie)?.director || "";
    setSelectedMovie(movie);
    setSelectedDirector(director);

    const movieError = movie ? "" : "Debe seleccionar una película.";
    setErrors((prevErrors) => ({ ...prevErrors, movie: movieError }));
  };

  const handleDirectorChange = (event) => {
    const director = event.target.value;
    const movie = movies.find((m) => m.director === director)?.title || "";
    setSelectedDirector(director);
    setSelectedMovie(movie);

    const directorError = director ? "" : "Debe seleccionar un director.";
    setErrors((prevErrors) => ({ ...prevErrors, director: directorError }));
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(value);

    const priceError = validatePrice(value);
    setErrors((prevErrors) => ({ ...prevErrors, price: priceError }));
  };

  const handleDateChange = (date) => {
    setDate(date);

    const dateError = validateDate(date);
    setErrors((prevErrors) => ({ ...prevErrors, date: dateError }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({ movie: "", director: "", date: "", price: "" });

    let validationError = validatePrice(price);
    if (validationError) {
      setErrors((prevErrors) => ({ ...prevErrors, price: validationError }));
      return;
    }

    validationError = validateDate(date);
    if (validationError) {
      setErrors((prevErrors) => ({ ...prevErrors, date: validationError }));
      return;
    }

    validationError = validateDirectorFunctions(
      selectedDirector,
      date,
      existingFunctions
    );
    if (validationError) {
      setErrors((prevErrors) => ({ ...prevErrors, director: validationError }));
      return;
    }

    validationError = validateInternationalMovieFunctions(
      selectedMovie,
      existingFunctions,
      movies
    );
    if (validationError) {
      setErrors((prevErrors) => ({ ...prevErrors, movie: validationError }));
      return;
    }

    alert(
      `Película: ${selectedMovie}\nDirector: ${selectedDirector}\nFecha: ${date}\nPrecio: ${price}`
    );
  };

  return (
    <Container className="form-container mt-4">
      <h2>Cargar Función</h2>
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
          {errors.movie && (
            <Alert variant="danger" className="small-alert">
              {errors.movie}
            </Alert>
          )}
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
          {errors.director && (
            <Alert variant="danger" className="small-alert">
              {errors.director}
            </Alert>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fecha y Hora</Form.Label> <br />
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            showTimeSelect
            dateFormat="Pp"
            className="form-control"
          />
          {errors.date && (
            <Alert variant="danger" className="small-alert">
              {errors.date}
            </Alert>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={handlePriceChange}
            placeholder="Ingrese el precio"
          />
          {errors.price && (
            <Alert variant="danger" className="small-alert">
              {errors.price}
            </Alert>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar Función
        </Button>
      </Form>
    </Container>
  );
};

export default FormCreateFunction;
