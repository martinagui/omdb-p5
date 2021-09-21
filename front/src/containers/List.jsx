import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "../components/Card";
//API source and key
const source = "http://www.omdbapi.com/?i=tt3896198&apikey=e0dc2682&s=batman";

const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e0dc2682&s=";

//Axios instance
const api = axios.create({
  baseURL: source,
});

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      searchSource: `http://www.omdbapi.com/?i=tt3896198&apikey=e0dc2682&s=`,
    };

    //Bindeamos el this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    api.get(source).then((res) => {
      const query = res.data.Search;
      this.setState({ movies: query });
      console.log(this.state.movies);
    });
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.searchTerm) {
      return this.setState({ error: "Please insert a valid text" });
    }

    api.get(`${URL}${this.state.searchTerm}`).then((res) => {
      const query = res.data;
      this.setState({ movies: query.Search });
    });
    // .then((res) => {
    //   if (!this.state.movies) {
    //     return this.setState({ error: "Not found" });
    //   }

    //   this.setState({ movies: res.data.Search, error: "", searchTerm: "" });
    // });
  }

  render() {
    // console.log(`SearchTerm: ${this.state.searchTerm}`);
    // console.log("render... this.state.movie:");
    // console.log(this.state.movies);
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-4 offset-md-4 p-4">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={this.handleChange}
                value={this.state.searchTerm}
                autoFocus
              ></input>
              {/* <button type="submit">Go!</button> */}
            </form>
            <p className="text-white">
              {this.state.error ? this.state.error : ""}
            </p>
          </div>
        </div>
        <div className="row">
          {this.state.movies.map((movie, i) => {
            return <Card movie={movie} key={i} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default List;
