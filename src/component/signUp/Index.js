import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "./Button";
import { actionCreators as actions } from "../../reducers/Reducer";

function mapStateToProps(state) {
    const { loginFlg } = state;
    return {
        loginFlg
    }
}

function mapDisPatchToProps(dispatch) {
    return {
        signup: bindActionCreators(actions.signup, dispatch),
        cancel: bindActionCreators(actions.cancel, dispatch)
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(Button);