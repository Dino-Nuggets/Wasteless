const {models} = require('mongoose')
const User = require('./UserModel');
const UserController = {};

UserController.signup = (req, res, next) => {
  console.log('we in signup controller');
  const { username, password } = req.body;

  User.create({ username, password}) ///Changed from models.User
  .then(() => {
  return next();
  })
  .catch((err) =>
  next({
    log: `UserController.signup: ERROR: ${err}`,
    message: {
      err: 'Error occurred in UserController.signup. Check server logs for more details.',
    },
  }));
  };

// USER CONTROLLER LOGIN ALSO VERIFYS USER VALIDITY
UserController.login = (req, res, next) => {
  console.log('we in login controller');
  const { username, password } = req.body;
  console.log(username, password)
  User.find({username: username , password: password})///Changed from models.User
  .then((data) => {
    console.log('data is ', data);
    console.log('Griff did something', res.locals)
    if(data[0]){ 
      res.locals.loggedIn = {loggedIn: true}; 
      console.log(res.locals.loggedIn);
    }else{
        return console.log("Invalid credentials.")}
    // if user is found, {loggedin: true}
    // console.log('We\'re in login')
    // console.log('data.user', typeof data.user);
    return next();
  })
  .catch((err)=>
  next({
      log:`UserController.login: ERROR: ${err}`,
      message:{
          err: 'Error: Invalid Credentials '
      }
    })
  )
};

// UserController.setCookie =(req, res, next) => {
//   console.log('we made it to cookie');
//   res.cookie('user', data.user);
//   return next();
// }

//Cookie will never be invoked, the routing for the cookie above has been removed


module.exports = UserController;