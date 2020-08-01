import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/76341?api_key=0b838f37d63f1772b58e394e366504ce"
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // axios({
    //   url:
    //     "https://api.themoviedb.org/3/movie/76341?api_key=0b838f37d63f1772b58e394e366504ce",
    //   method: "get",
    // }).then(data) {
    //   console.log(data)
    // }
  }

  render() {
    return (
      <div>
        <h2>home</h2>
      </div>
    );
  }
}

export default Home;
