import React from "react";
import Movie from "../components/Movie/Movie";
import { connect } from "react-redux";

function MovieRoot(props) {
  // console.log(props);
  const { id } = props.location.state;
  const { userId, email, name } = props;
  // const { userData } = props;
  return (
    <div className="MovieRoot">
      <Movie id={id} userId={userId} email={email} name={name} />
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    userId: state.user.userId,
    email: state.user.email,
    name: state.user.name,
  };
};

export default connect(mapStateToProps)(MovieRoot);
