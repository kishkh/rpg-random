import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';


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
