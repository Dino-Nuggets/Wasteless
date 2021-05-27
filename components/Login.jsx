import React from 'react';
import Auth from '../components/Auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Homepage from './Homepage'

class Login extends React.Component {
  constructor (props){
    super(props);
    this.signInFunc = this.signInFunc.bind(this);
  }


  signInFunc = (userName, userPassword) => {
    console.log('signing in');

    fetch('/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: userName, password: userPassword })
    })
      .then(response => response.json())
      .then(response => {
        console.log('response received!', response);

        // { _id: 123434234, username: tom, password: codesmith }
        // receives the user profile data (and user ID)
        // send user profile data to App state so we can access it in other components
        this.props.setUserFunc(response._id, response.username);
        // change view to homepage
        return <Redirect to="/homepage" />
      })
      .catch(err => console.log(err));
    // fetch(`http://localhost:3000/user/?username=${userName}`)
      // .then(response => response.json())
      // .then(response => {
      //   console.log('response received!', response);
      //   const { user } = response;
       
      //   if (userPassword === user.password) {
      //     // if password matches, setUser & changeView to Homepag
      //     this.props.setUserFunc(user._id, user.username);
      //     //redirect user to homepage
      //   } else {
      //     // if password doesn't match, changeView to signup
          
      //   }
      // }
      // )

      //     .catch(err => console.log(err));
 }

  render() {
    console.log('props', this.props);

    return (
      <>
      <div>
        <h1>Log in</h1>
        <Auth type="Sign In" authFunc={this.signInFunc}/>
        </div>
        <div>
        <p>Don't have an account?</p>
        <Link to="/" >Sign Up</Link>
        
      </div>
      </>
    );
  };
};
  export default Login;