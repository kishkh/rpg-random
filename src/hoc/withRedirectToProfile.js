import React from 'react';
import { Redirect } from 'react-router-dom';

const withRedirectToProfile = (Component) => {
  const RedirectComponent = (props) => {
    if (props.profile.created) {
      return <Redirect to={'/profile'}/>
    }
    return <Component {...props} />
  }
  return RedirectComponent
}

export {withRedirectToProfile};