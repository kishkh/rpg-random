import React from 'react';
import { Redirect } from 'react-router-dom';

const withRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (props.isFight) {
      return <Redirect to={'/battle'}/>
    }
    return <Component {...props} />
  }
  return RedirectComponent
}

export default withRedirect;