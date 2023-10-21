import { useEffect, useState } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
import Axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY

export const Main = () => {
  const [film, setFilm] = useState([]);

  const fetchFilm = () => {
    Axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}=hobbit`).then(
      (res) => {
        setFilm(res.data.Search);
      }
    );
  };
  useEffect(() => {
    fetchFilm();
  }, []);

  const searchFilm = (str, type = "all") => {
    Axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    ).then((res) => {
      setFilm(res.data.Search);
    });
  };
  useEffect(() => {
    searchFilm();
  }, []);

  return (
    <main className="container content">
      <Search searchFilm={searchFilm} />
      {film.length ? <Movies movies={film} /> : <Preloader />}
    </main>
  );
};
