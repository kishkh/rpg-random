import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './ProfileLink.module.css';
class ProfileLink extends React.Component {
  
  componentDidUpdate() {
    this.props.profile.hp.current < this.props.profile.hp.full && !this.props.isFight && this.props.profile.isHealing && this.props.healPromise(this.props.profile.hp.current, this.props.profile.hp.full)
      .then((healTrue) => {
        this.props.isHealing(true)
      })
      .then(() => {
        setTimeout(() => {
          this.props.heal()
          this.props.isHealingTrue()
          this.props.isHealing(false)
        }, 10000)
      })
      .catch((healFalse) => {
        this.props.isHealing(false)
      })
  }

  render() {
    let heal;
    if (!this.props.isFight && this.props.profile.isHealingClass) {
      heal = classes.heal
    } else {
      heal = ''
    }


    return (
      <NavLink to='/profile' activeClassName={classes.active} className={classes.link}>
        <div className={this.props.profile.items.head}>
        </div>
        <span className={classes.text}>
          <div className='ico_hp'>
            <div className={heal}></div>
          </div>
          {
            this.props.isFight ?
              `${this.props.battleHP.current}/${this.props.battleHP.full}` :
              `${this.props.profile.hp.current}/${this.props.profile.hp.full}`
          }
        </span>
      </NavLink>
    )
  }
}

export default ProfileLink;