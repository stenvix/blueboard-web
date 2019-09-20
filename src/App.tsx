import React from 'react';
import logo from './logo.svg';
// import './App.css';
import 'semantic-ui-css/semantic.min.css'

import { AuthState } from './redux/auth/types';
import { AppState } from './redux/store';
import { connect } from 'react-redux';
import SignInPage from './containers/SignIn/SignInPage';

const mapStateToProps = (state: AppState) => ({
  auth: state.auth
});

interface AppProps {
  auth: AuthState
}

class App extends React.Component<AppProps>{
  render() {
    return (
      <div>
        <SignInPage />
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(App);
