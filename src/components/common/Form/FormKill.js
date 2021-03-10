import React, { Component } from 'react';

import ItemBox from '../ItemBox/ItemBox';

class FormKill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'head',
      value: this.props.enemy.items.head
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }


  formSubmit(e) {
    this.props.takeItem(this.state.type, this.state.value)
    this.props.kill()
  }
  onValueChange(e) {
    this.setState({
      type: e.target.name,
      value: e.target.value,
    });
  }
  render() {
    return (
      <form >
        <div className='radio'>
          <input
            type='radio'
            name='head'
            id='head'
            value={this.props.enemy.items.head}
            checked={this.state.value === this.props.enemy.items.head}
            onChange={this.onValueChange}
          />
          <label htmlFor='head'>
            <ItemBox
              color='white'
              item={this.props.enemy.items.head}
              active={this.state.value === this.props.enemy.items.head}
            />
          </label>
        </div>
        <div className='radio'>

          <input
            type='radio'
            name='weapon'
            id='weapon'
            value={this.props.enemy.items.weapon}
            checked={this.state.value === this.props.enemy.items.weapon}
            onChange={this.onValueChange}
          />
          <label htmlFor='weapon'>
            <ItemBox
              color='white'
              item={this.props.enemy.items.weapon}
              active={this.state.value === this.props.enemy.items.weapon}
            />
          </label>
        </div>
        <div className='radio'>

          <input
            type='radio'
            name='body'
            id='body'
            value={this.props.enemy.items.body}
            checked={this.state.value === this.props.enemy.items.body}
            onChange={this.onValueChange}
          />
          <label htmlFor='body'>
            <ItemBox
              color='white'
              item={this.props.enemy.items.body}
              active={this.state.value === this.props.enemy.items.body}
            />
          </label>
        </div>
        <div className='radio'>

          <input
            type='radio'
            name='legs'
            id='legs'
            value={this.props.enemy.items.legs}
            checked={this.state.value === this.props.enemy.items.legs}
            onChange={this.onValueChange}
          />
          <label htmlFor='legs'>
            <ItemBox
              color='white'
              item={this.props.enemy.items.legs}
              active={this.state.value === this.props.enemy.items.legs}
            />
          </label>
        </div>


        <div >


          <button onClick={this.formSubmit} type='button' disabled={!this.state.value} className={this.props.ico} >
          </button>

        </div>

      </form>
    );
  }
}


export default FormKill