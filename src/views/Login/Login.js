import React, { PropTypes, Component } from 'react';
import {Button} from 'react-bootstrap';
import AuthService from '../../utils/AuthService';
import './Login.css';
// import GetRecipe from '../GetRecipe/GetRecipe';
import { Link } from 'react-router';

export class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    location: PropTypes.object,
    auth: PropTypes.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props;
    return (
      <div className="page">
        <header className="header">
          <div className="foodMeLogin">
            <h1><Link to="/" className="foodMe">foodMe.</Link></h1>
            <Button className="loginButton" bsStyle="primary" onClick={auth.login.bind(this)}>LOGIN</Button>
          </div>
        </header>
        <div className="ingredients-recipes">
        {
          // <GetRecipe/>
        }
          <h1>Hello world</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.</p>
        </div>
      </div>
    );
  }
}

export default Login;

