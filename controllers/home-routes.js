const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Female, Male, Review } = require("../models");


router.get("/", (req, res) => {
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

  router.get('/login', (req, res) => {
    res.render('login');
  });

// router.get("/", (req, res) => {
//     Male.findAll({
//       attributes: [
//         "id",
//         "product_name",
//         "price",
//         "photo",
//       ],
//     })
//       .then((dbMaleData) => {
//         const maleProduct = dbMaleData.map((data) => data.get({ plain: true }));
//         res.render("homepage", { maleProduct });
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

module.exports = router;
