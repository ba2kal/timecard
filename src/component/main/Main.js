import React from "react";
import mainImg from "../../../public/images/main-cat.jpg"
import { connect } from "react-redux";

const Main = (props) => {
  return (
    <div className="columns is-centered">
    <div>
      <img src={mainImg}/>
    </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { loginFlg } = state;
  return {
      loginFlg
  }
}

export default connect(mapStateToProps)(Main);
