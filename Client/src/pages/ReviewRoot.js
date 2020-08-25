import React from "react";
import Review from "../components/Movie/Review/Review";
import { connect } from "react-redux";

function ReviewRoot(props) {
  const { reviewer } = props;
  return (
    <div className="ReviewRoot">
      <Review reviewer={reviewer} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    reviewer: state.user.userId,
  };
};

export default connect(mapStateToProps)(ReviewRoot);
