const router = require('express').Router();

const{User} = require('../../models')
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json(err)
    });
})


// GET /api/users/1
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    })
    .then(data => {
      if(!data) {
        res.status(404).json({ message: 'No user found with this id!'});
        return;
      }
        res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// signup /api/users
router.post('/', (req, res) => {
  
  const {username, email, password} = req.body;
  // Simple Validate
  if (!username || !email || !password) return res.status("Invalid Inputs");
  User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })
  .then(data => {
    req.session.save(() => {
    req.session.user_id = data.id;
    req.session.username = data.username;
    req.session.loggedIn = true;
    res.json(data);
    });
  }).catch(error => {
    res.status(500).json(`Error: ${error.message}`);
  })
});

// // PUT /api/users/1
// router.put('/:id', (req, res) => {
//   User.update(req.body, {
//     individualHooks: true,
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(data => {
//     if(!data[0]) {
//       res.status(404).json({ message: 'No user found with this id!' });
//       return;
//     }
//       res.json(data);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

// login
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
    })
    .then(data => {
      if(!data) {
        res.status(400).json({ message: 'No user with that username!' });
          return;
      }
        // Verify user
      const validPassword = data.checkPassword(req.body.password);
      if(!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
      req.session.save(() => {
        // declare session variables
        req.session.user_id = data.id;
        req.session.username = data.username;
        req.session.loggedIn = true;
    
        res.json({ user: data, message: 'You are now logged in!' });
      });
    });
});

// logout
router.post('/logout', withAuth, (req, res) => {
  if(req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// DELETE /api/users/1
router.delete('/:id', withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      if(!data) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;