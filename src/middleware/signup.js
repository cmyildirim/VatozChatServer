module.exports = function(app) {
  return function signup(req, res, next) {
    const body = req.body;
    const User = app.service("users");
    debugger
    User.find({
      query: {
        facebookId: body.id
      }
    }).then((user, err) => {
      if (user.total !== 0) {
        res.send({ user });
      } else {
        app
          .service("users")
          .create({
            email: body.email,
            facebookId: body.id,
            name: body.name,
            image: body.image
          })
          .then(user => res.send({ user }))
          .catch(next);
      }
    });
  };
};