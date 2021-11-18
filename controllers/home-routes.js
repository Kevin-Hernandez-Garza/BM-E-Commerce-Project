const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Female, Male, Review } = require("../models");



// router.get("/", (req, res) => {
//     console.log(req.session);


//     Male.findAll({
//       attributes: [
//         "id",
//         "product_name",
//         "price",
//         "photo",
//       ],
//     })
//       .then((dbMaleData) => {
//         const maleProducts = dbMaleData.map((data) => data.get({ plain: true }));
//         res.render("homepage", { maleProducts });
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });


router.get("/", async (req, res) => {
    try {

      console.log(req.session);

    // DB requests
    const dbFemaleData = await Female.findAll({
      attributes: [
        "id",
        "product_name",
        "price",
        "photo",
      ],
    });
    const dbMaleData = await Male.findAll({});

    // Converting
    const productsforFemale = dbFemaleData.map((data) => data.get({ plain: true }));
    const productsForMale = dbMaleData.map(data => data.get({plain: true}));
        
    // Send The Response
    res.render('homepage', {
      maleProducts: productsForMale, 
      femaleProducts: productsforFemale, 
      loggedIn: req.session.loggedIn});

    } catch(error) {
        res.status(500).json(error.message);
      }
  });


  // login
  router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
  });

  // Individual PRoduct
  router.get('/products/:gender/:id', async (req, res) => {
    let product;
    /* const path = req.originalUrl;
    if (path.split("/")[1] === "male") {
      product = await Male.findOne({where: {id: req.params.id}});
    } else {
      product = await Female.findOne({where: {id: req.params.id}});
    } */


    // if(!product) return res.status(404).json("not found");


    // res.render('product', { product })
    const {gender} = req.params;
    if (gender === "male") {
      const dbData = await Male.findOne({
        where: {id: req.params.id}
      });
      product = dbData.get({plain: true});
      if(!dbData) return res.status(404).end();
      return res.render('product', {product});
    }
    const dbData = await Female.findOne({
      where: {id: req.params.id}
    });
    product = dbData.get({plain: true});
    if(!dbData) return res.status(404).end();
    return res.render('product', {product});
    // res.json({product});
  });

module.exports = router;
