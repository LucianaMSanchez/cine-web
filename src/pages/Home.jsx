import React from "react";
import MovieList from "../components/MovieList/MovieList";
import Slider from "../components/Slider/Slider";
import BottomBanner from "../components/BottomBanner/BottomBanner";

const Home = () => {
  return (
    <>
      <Slider />
      <MovieList />
      <BottomBanner/>
    </>
  );
};

export default Home;