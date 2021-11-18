const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Female, Male, Review } = require("../models");



router.get("/", (req, res) => {
    console.log(req.session);


    Male.findAll({
      attributes: [
        "id",
        "product_name",
        "price",
        "photo",
      ],
    })
      .then((dbMaleData) => {
        const maleProducts = dbMaleData.map((data) => data.get({ plain: true }));
        res.render("homepage", { maleProducts });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });


router.get("/", (req, res) => {
    console.log(req.session);


    Female.findAll({
      attributes: [
        "id",
        "product_name",
        "price",
        "photo",
      ],
    })
      .then((dbFemaleData) => {
        const products = dbFemaleData.map((data) => data.get({ plain: true }));
        res.render("homepage", { products });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  // login
  router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
  });

module.exports = router;
