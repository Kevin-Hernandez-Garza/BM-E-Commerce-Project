const express = require('express');
const {Female} = require('../../models');
const upload = require('../../utils/uploadMiddlware');

const router = express.Router();

//Get all products
router.get('/', async (req, res) => {
  try {
    const femaleProducts = await Female.findAll({});
    if (req.query.search) {
      return res.json(femaleProducts.filter(product => product.product_name.toLowerCase().includes(req.query.search.toLowerCase())));
    }
    res.json(femaleProducts);
  } catch (error) {
    res.status(500).json(error.message);
  }
})

//Get product by id
router.get('/:id', (req, res) => {
  Female.findOne({
    where: {id: req.params.id},
  })
    .then(data => {
      if(!data) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
      }
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Add a product
router.post('/', upload.single('photo'), async (req, res) => {
  try {
    let img = req.file;
    let protocol = req.protocol;
    let host = req.get('host');
    let imgSrc = `${protocol}://${host}/images/${img.filename}`;
    const newFemaleProduct = await Female.create({
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
      description: req.body.description,
      photo: imgSrc
    });

    res.status(201).json(newFemaleProduct);

  } catch (error) {
    res.status(500).json(error.message);
  }
});

//Update a product
router.put('/:id',upload.single('photo'), (req, res) => {
    let img = req.file;
    let protocol = req.protocol;
    let host = req.get('host');
    let imgSrc = `${protocol}://${host}/images/${img.filename}`;
  Female.update({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    description: req.body.description,
    photo: imgSrc
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      if(!data) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
      }
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Delete a product
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Female.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      if(!data) {
          res.status(404).json({ message: 'No category found with this id' });
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
