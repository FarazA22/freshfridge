import React, { Component } from 'react';
//import Auth from '../components/Auth.jsx';
// import GoogleAuth from './GoogleAuth.jsx';
import '../styles/login.scss';

const mapDispatchToProps = (dispatch) => {
  // dispatcher for sending fetch for login
  // dispatcher for sending fetch for signup
};

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    // bind the event handlers
  }

  // declare event handlers

  render() {
    return (
      <div className="logInForm">
        <h1>Sign Up Now</h1>
        <input type="email" className="inputBox" placeholder="Your Email" />
        <input
          type="password"
          className="inputBox"
          placeholder="Your Password"
        />
        <input type="button" class="primaryButton" value="Submit" />
        <hr />
        <p className="or">OR</p>
        <input
          type="button"
          class="secondaryButton"
          value="Login with Google"
        />
        <p>
          Do you have an account? <a href="#">Sign in</a>
        </p>
      </div>
    );
  }
}

//export default connect(null, mapDispatchToProps)(LoginContainer);
export default LoginContainer;

/*
original loginContainer

const MainContainer = () => {
  //const [fetched, setFetched] = useState(false);

  return (
    <div className="MainContainer"> 
//     <h1>FRESH FRIDGE</h1>
//     <Auth />
//     {/* <GoogleAuth /> */
//     <ListContainer fetched={fetched} setFetched={setFetched} />
//     <AddItem setFetched={setFetched} />
//   </div>]

// );
