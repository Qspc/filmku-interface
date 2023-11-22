import "@themesberg/flowbite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import Film from "pages/Film";
import Form from "pages/Form";
import DetailFilm from "pages/DetailFilm";
import Movies from "pages/Movies";
import Movie from "pages/Movie";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="film" element={<Film />} />
        <Route path="film/:id" element={<DetailFilm />} />
        <Route path="form" element={<Form />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
