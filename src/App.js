import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import ico from './assets/images/icon8.png';
import './App.css';


class App extends React.Component {
  componentDidMount() {
    window.addEventListener('beforeunload', e => {
      localStorage.setItem('profile', JSON.stringify({
        ...this.props.store.getState().profile,
        isHealing: true,
      }))
      localStorage.setItem('enemies', JSON.stringify(this.props.store.getState().enemies))
      localStorage.setItem('crypt', JSON.stringify(this.props.store.getState().crypt))
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className='modalTurnScreen'>
          <img src={ico} alt='icon'/>
          <span>Please rotate your device </span>
          <p>We support landscape mode only</p>
        </div>
        <div className='app-wrapper'>
          <Header />
          <Body />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
