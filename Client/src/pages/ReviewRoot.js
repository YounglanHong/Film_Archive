import React from "react";
import Review from "../components/Movie/Review/Review";
import { connect } from "react-redux";

function ReviewRoot(props) {
  const { reviewer, reviewData } = props;

  return (
    <div className="ReviewRoot">
      <Review reviewer={reviewer} reviewData={reviewData} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    reviewer: state.user.userId,
    reviewData: state.movie.reviewData,
  };
};

export default connect(mapStateToProps)(ReviewRoot);
