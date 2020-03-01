import React from "react";
import mainImg from "../../../public/images/main-cat.jpg"
import { connect } from "react-redux";

const Main = (props) => {
  console.log(props.loginFlg);
  return (
    <div>
      <img src={mainImg}/>
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
