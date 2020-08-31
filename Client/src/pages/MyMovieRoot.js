import React from "react";
import MyMovie from "../components/Movie/MyMovie/MyMovie";
import { connect } from "react-redux";

import "../styles/mymovie.css";

function MyMovieRoot(props) {
  const { userId } = props;
  return (
    <div className="MyMovieRoot">
      <MyMovie userId={userId} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.userId,
  };
};

export default connect(mapStateToProps)(MyMovieRoot);
