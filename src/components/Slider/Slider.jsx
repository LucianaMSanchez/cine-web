import { useState } from "react";
import { Carousel, Button, Modal } from "react-bootstrap";
import "./Slider.css";

const Slider = () => {
  const slides = [
    {
      image:
        "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/14552c93-d318-4563-a00b-343df7e35d0b/4beb5159-7570-4f7e-bd37-6f7ea0ccff52?host=wbd-images.prod-vod.h264.io&partner=beamcom",
      trailer: "https://www.youtube.com/embed/OCEkhKvm-hU",
    },
    {
      image:
        "https://i.ytimg.com/vi/A1FtRovJMxk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDSDRGU7c9EGMuHNqhR9nbWEfFrrg",
      trailer: "https://www.youtube.com/embed/tA_qMdzvCvk",
    },
    {
      image:
        "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/d5e3be11-eb8b-449f-89cf-db887ddee777/beda1820a916959baee657ba47d022f7a81e9d6b.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom",
      trailer: "https://www.youtube.com/embed/9kLlmWPilSE",
    },
    {
      image:
        "https://media.lacapital.com.ar/p/076a7cefc44fa9a47d369b8ac08fbfb3/adjuntos/203/imagenes/006/451/0006451399/642x0/smart/01-11-el_secretojpg.jpg",
      trailer: "https://www.youtube.com/embed/RQT0kH2oZxk",
    },
    {
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/c6a93a716d8983fbfd445e2be9425d53bb755554ac20d8a51fd8ad10c3fc3639.jpg",
      trailer: "https://www.youtube.com/embed/3BxE9osMt5U",
    },
  ];

  const [show, setShow] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState("");

  const handleShow = (trailer) => {
    setSelectedTrailer(trailer);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const slidesItems = slides.map((slide, index) => (
    <Carousel.Item key={index}>
      <img
        className="d-block w-100"
        src={slide.image}
        alt={`Slide ${index + 1}`}
      />
      <Carousel.Caption className="caption-trailer-button">
        <Button
          variant="primary"
          className="btn btn-primary btn-sm"
          onClick={() => handleShow(slide.trailer)}
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
