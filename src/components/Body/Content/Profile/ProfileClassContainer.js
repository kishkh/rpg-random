import React from 'react';
import Profile from './Profile';
class ProfileClassContainer extends React.Component {
  componentDidMount() {
    this.props.updateData(this.props.result)
    this.props.emptyResult() 
  }
  componentDidUpdate() {
    this.props.profile.exp.current >= this.props.profile.exp.nextLvl && this.props.lvlUp()    
  }
  
  render() {
    return (
      <Profile 
        profile={this.props.profile}
        skillUp={this.props.skillUp}
      />
    )
  }

}

export default ProfileClassContainer;