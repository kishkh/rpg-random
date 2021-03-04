import { connect } from "react-redux";
import { compose } from "redux";
import { withRedirectToProfile } from "../../../../hoc/withRedirectToProfile";
import { createHeroCreator } from "../../../../redux/reducers/profile-reducer";
import CreatePlayer from "./CreatePlayer";

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createHero: (heroName, color) => {
      dispatch(createHeroCreator(heroName, color))
    }
  }
}





export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirectToProfile
)(CreatePlayer)
