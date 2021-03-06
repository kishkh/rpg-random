import React from 'react';
import { Redirect } from 'react-router-dom';

const withRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.profile.created) {
      return <Redirect to={'/create'}/>
    }
    return <Component {...props} />
  }
  return RedirectComponent
}

export default withRedirect;