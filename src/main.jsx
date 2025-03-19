import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import CreateFunction from "./pages/CreateFunction";
import UpdateFunction from "./pages/UpdateFunction";
import FunctionList from "./pages/FunctionList";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/functions" element={<FunctionList />} />
          <Route path="/create-function" element={<CreateFunction />} />
          <Route path="/update-function/:id" element={<UpdateFunction />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  </React.StrictMode>
);
