import React from 'react';
import Auth from './Auth.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './Login.jsx'
import Homepage from './Homepage'
class SignUp extends React.Component {
  constructor (props){
    super(props);
// state
   this.state = {
      username: '',
      signIn: false,
      }
    this.signUpFunc = this.signUpFunc.bind(this);
  }
// fetch request for password/username as a POST
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// use as template for fetch request

  signUpFunc = (userName, userPassword) => {
    console.log('signing up');
   //entry route is api.js
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: userName, password: userPassword })
    })
      // .then(response => {
      //   console.log('response', response)
      //    response.json()
      //     })
      .then(response => {
        console.log('response received!', response);

        // { _id: 123434234, username: tom, password: codesmith }
        // receives the user profile data (and user ID)
        // send user profile data to App state so we can access it in other components
        // this.props.setUserFunc(response._id, response.username);
        // change view to homepage
        console.log('username in sign up function of SignUp.jsx',userName)
        this.setState({signIn: true});
        this.setState({username: UserName});
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log('props in sign up', this.props);
    const { changeView } = this.props;
    console.log('props', this.props);

    if(this.state.signIn) return <Redirect to='/homepage'/>;
        // to={{
        //   pathname = '/homepage',
        //   state={ username: this.state.username}
        //     }}
            // /> )

    return (
      <>
      <div>
        <h1>Sign Up</h1>
        <Auth type="Sign Up" authFunc={this.signUpFunc} />
      </div>
      <div>
        <p>Already have an account?</p>
        <Link to='/login'>Log in here</Link>
      </div>
      </>
    );
  };
};

export default SignUp;