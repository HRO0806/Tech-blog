const router = require('express').Router();
const res = require('express/lib/response');
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
      });
  });

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;    
    }

    res.render('login');
});

router.get('/Henrys', (req, res) => {
    res.render('Henrys', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/louies', (req, res) => {
    res.render('louies', {
        loggedIn: req.session.loggedIn
    });
});
router.get('/obiwans', (req, res) => {
    res.render('obiwans', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;
