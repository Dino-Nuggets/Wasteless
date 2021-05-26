const models = require('./UserModel');
const UserController = {};

UserController.signup = (req, res, next) => {
  const { user, password } = req.body;


  models.User.create({ user, password})
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

UserController.login = (req, res, next) => {
  const { user, password } = req.body;

    models.User.findOne({ user, password})
    .then((data) => {
      console.log('We\'re in login')
      res.locals.user = data.user;
      console.log('(dingus.user) data.user', typeof data.user);
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

UserController.setCookie =(req, res, next) => {
  console.log('we made it to setDingus, ya cookie');
  res.cookie('user', data.user);
  return next();
}



module.exports = UserController;