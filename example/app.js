const express = require('express');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const user = require('./models/user');

const app = express();

app.use(session({
  store: new MemoryStore({
    checkPeriod: 36000000
  }),
  resave: true,
  saveUninitialized: true,
  secret: 'DieoKKD837YDU8@',
  cookie: { maxAge: 36000000 }
}));

app.use('/logoff', function(req, res) {
  req.session.destroy();
  res.redirect('/login');
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.post('/login', jsonParser, function(req, res) {
  console.log(req.body);
  
  user.get(pool, req.body)
  .then(users => {
    if (users.length > 0) {
      req.session.user = users[0];
      req.session.userId = users[0].id;
      req.session.userName = users[0].userName;
      res.json({
        success: true
      });
    } else {
      throw new Error('Неверный пользователь или пароль')
    }
  })
  .catch(err => {
    res.json({
      success: false,
      message: err.message
    });
  });
});

app.use('/', function(req, res) {
  if (req.session.userId > 0) {
    req.next();
  } else {
    res.redirect('/login');
  }
});

// ...

app.use(function(req, res) {
  res.redirect('/main');
});

app.listen(3000, () => {
  console.log('Listening on port ' + config.port);
});
