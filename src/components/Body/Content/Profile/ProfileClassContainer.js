import React from 'react';import Profile from './Profile';
class ProfileClassContainer extends React.Component {
  componentDidMount() {
    this.props.updateData(this.props.result)
    this.props.isEnemyDead(this.props.enemy.id, this.props.enemy.death)
    if(this.props.player.death) {
      this.props.isDead(this.props.profile)
    } 
    this.props.emptyResult()
  }
  
  componentDidUpdate() {
    this.props.profile.exp.current >= this.props.profile.exp.nextLvl && this.props.lvlUp(this.props.profile.timers)    
  }

  
  render() {
    return (
      <>
        <Profile 
          profile={this.props.profile}
          skillUp={this.props.skillUp}
        />
      </>
    )
  }

}

export default ProfileClassContainer;