import MovieList from "../components/MovieList/MovieList";
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer/Footer";
import BottomBanner from "../components/BottomBanner/BottomBanner";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="movie-list-container">
        <MovieList />
      </div>
      <BottomBanner />
      <Footer />
    </>
  );
};

export default Home;
