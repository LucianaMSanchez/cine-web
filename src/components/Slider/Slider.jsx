import { useEffect, useState } from "react";
import { Carousel, Button, Modal } from "react-bootstrap";
import "./Slider.css";

const Slider = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5206/movies");
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
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
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleShow = (trailer) => {
    setSelectedTrailer(trailer);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const slidesItems = movies?.map((slide, index) => (
    <Carousel.Item key={index}>
      <img
        className="d-block w-100"
        src={slide.imageSliderUrl}
        alt={`Slide ${index + 1}`}
      />
      <Carousel.Caption className="caption-trailer-button">
        <Button
          variant="primary"
          className="btn btn-primary btn-sm"
          onClick={() => handleShow(slide.trailerUrl)}
        >
          <i className="bi bi-eye"></i> Tráiler
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <>
      <div className="slider-container">
        <Carousel>{slidesItems}</Carousel>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tráiler Oficial</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <iframe
            width="100%"
            height="315"
            src={selectedTrailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Slider;
