import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import DatePicker from "react-datepicker";
import {
  validatePrice,
  validateDate,
} from "../../utils/validators";
import "./FormCreate.css";

const API_URL_MOVIES = "http://localhost:5206/movies";
const API_URL_CREATE_FUNCTION = "http://localhost:5206/functions";

const FormCreateFunction = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    movieId: "",
    director: "",
    directorId: "",
    date: new Date(),
    price: "",
  });
  const [errors, setErrors] = useState({});
  const [messages, setMessages] = useState({ success: "", error: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL_MOVIES);
        if (!response.ok) throw new Error("Error al obtener películas.");

        const data = await response.json();
        setMovies(data);
      } catch (error) {
        setMessages({ success: "", error: error.message });
      }
    };

    fetchMovies();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "movieId") {
      const selectedMovie = movies.find((m) => m.id === parseInt(value));
      setFormData((prev) => ({
        ...prev,
        movieId: value,
        director: selectedMovie?.director || "",
        directorId: selectedMovie?.directorId || "",
      }));
      setErrors((prev) => ({ ...prev, movieId: value ? "" : "Debe seleccionar una película." }));
    }

    if (name === "price") {
      setFormData((prev) => ({ ...prev, price: value }));
      setErrors((prev) => ({ ...prev, price: validatePrice(value) }));
    }
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
    setErrors((prev) => ({ ...prev, date: validateDate(date) }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessages({ success: "", error: "" });

    const { movieId, directorId, price, date } = formData;

    const validationErrors = {
      movieId: movieId ? "" : "Debe seleccionar una película.",
      date: validateDate(date),
      price: validatePrice(price),
    };

    if (Object.values(validationErrors).some((err) => err)) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_URL_CREATE_FUNCTION, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          movieId: parseInt(movieId),
          directorId,
          price: parseFloat(price),
          date: date.toISOString().split("T")[0],
          time: date.toTimeString().split(" ")[0],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData || "Error al crear la función.");
      }

      setMessages({ success: "Función creada exitosamente.", error: "" });
      setTimeout(() => {
        navigate(`/movie/${movieId}`); 
      }, 2000);
      setFormData({ movieId: "", director: "", directorId: "", date: new Date(), price: "" });
      setErrors({});
    } catch (error) {
      setMessages({ success: "", error: error.message });
    } finally {
      setLoading(false);
      setTimeout(() => setMessages({ success: "", error: "" }), 3000);
    }
  };

  return (
    <Container className="form-container mt-4">
      <h2 className="text-center mb-4 text-white">Cargar Función</h2>

      {messages.success && <Alert variant="success">{messages.success}</Alert>}
      {messages.error && <Alert variant="danger">{messages.error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Película</Form.Label>
          <Form.Select name="movieId" value={formData.movieId} onChange={handleInputChange}>
            <option value="">Selecciona una película</option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.name}
              </option>
            ))}
          </Form.Select>
          {errors.movieId && <Alert variant="danger" className="small-alert">{errors.movieId}</Alert>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Director</Form.Label>
          <Form.Control type="text" value={formData.director} disabled />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fecha y Hora</Form.Label> <br />
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            showTimeSelect
            dateFormat="Pp"
            className="form-control"
          />
          {errors.date && <Alert variant="danger" className="small-alert">{errors.date}</Alert>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Ingrese el precio"
          />
          {errors.price && <Alert variant="danger" className="small-alert">{errors.price}</Alert>}
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? <Spinner as="span" animation="border" size="sm" /> : "Guardar Función"}
        </Button>
      </Form>
    </Container>
  );
};

export default FormCreateFunction;
