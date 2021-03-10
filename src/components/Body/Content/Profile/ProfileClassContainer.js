import React from 'react'; import Profile from './Profile';

class ProfileClassContainer extends React.Component {
  componentDidMount() {
    if(!this.props.isFight){
      this.props.updateData(this.props.result, this.props.enemy.id)
    }
    this.props.enemy.death && this.props.isEnemyDead(
      this.props.enemy.id, 
      this.props.enemy.death,
      this.props.enemy.items.head
    )
    if (this.props.player.death) {
      this.props.isDead(this.props.profile)
    }
    this.props.emptyResult()
  }

  componentDidUpdate() {
    this.props.profile.exp.current >= this.props.profile.exp.nextLvl &&
      this.props.lvlUp(this.props.profile.timers)
  }


  render() {
    return (
      <>
        <Profile
          profile={this.props.profile}
          enemies={this.props.enemies}
          toggleInventory={this.props.toggleInventory}
          changeItems={this.props.changeItems}
          skillUpHP={this.props.skillUpHP}
          skillUpMinDamage={this.props.skillUpMinDamage}
          skillUpMaxDamage={this.props.skillUpMaxDamage}
        />
      </>
    )
  }
}

export default ProfileClassContainer;