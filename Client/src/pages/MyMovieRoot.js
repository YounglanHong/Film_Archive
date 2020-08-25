import React from "react";
import MyMovie from "../components/Movie/MyMovie/MyMovie";
import { connect } from "react-redux";

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
