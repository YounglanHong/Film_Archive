import React from "react";
import Review from "../components/Movie/Review/Review";
// import { connect } from "react-redux";

export default function ReviewRoot(props) {
  // const { userId } = props;
  console.log(props);
  return (
    <div className="ReviewRoot">
      <Review /* userId={userId} */ />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {
//     userId: state.user.userId,
//     // email: state.user.email,
//     // name: state.user.name,
//   };
// };

// export default connect(mapStateToProps)(ReviewRoot);
