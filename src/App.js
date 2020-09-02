import React from "react";
import "./App.css";
import Search from "./components/Search";
import MoviesList from "./components/MoviesList";
import axios from "axios";

class App extends React.Component {
  state = {
    query: "batman",
    results: [],
  };

  render() {
    const API_KEY = "41fc1793f331f1635f82c339a1724fad";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-FR&query=${this.state.query}`;

    const fetchAPI = async () => {
      const {
        data: { results },
      } = await axios(url);
      this.setState({ results: results });
    };

    const handleSearch = (e) => {
      this.setState({ query: e.target.value });
      fetchAPI(this.state.query);
    };

    return (
      <div className="App">
        <h1>React movies App</h1>
        <Search handleSearch={handleSearch} />
        <MoviesList results={this.state.results} />
      </div>
    );
  }
}

export default App;
