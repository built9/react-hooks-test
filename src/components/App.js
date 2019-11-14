import React, { useReducer, useEffect } from "react";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";
import spinner from "../assets/ajax-loader.gif";
import axios from "axios";
import "../App.css";

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then(res => {
      console.log(res);
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: res.data.Search
      });
    });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });
    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
      res => {
        if (res.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: res.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: res.data.Error
          });
        }
      }
    );
  };

  const { movies, errorMessage, loading } = state;
  const movieList =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  return (
    <div>
      <Header text="电影" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">{movieList}</div>
    </div>
  );
}

export default App;
