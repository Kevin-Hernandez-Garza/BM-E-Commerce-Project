const express = require('express');
const {Male} = require('../../models');
const upload = require('../../utils/uploadMiddlware');

const router = express.Router();

//Get all products
router.get('/', async (req, res) => {
  try {     
    const maleProducts = await Male.findAll({});
    if (req.query.search) {
      return res.json(maleProducts.filter(product => product.product_name.toLowerCase().includes(req.query.search.toLowerCase())));
    }
    res.json(maleProducts);
  } catch (error) {
    res.status(500).json(error.message);
  }
})

//Get product by id
router.get('/:id', (req, res) => {
  Male.findOne({
    where: {id: req.params.id},
  })
    .then(data => {
      if(!data) {
          res.status(404).json({ message: 'No product found with this id' });
          return;
      }
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Add new product
router.post('/', upload.single('photo'), async (req, res) => {
  try {
    let img = req.file;
    let protocol = req.protocol;
    let host = req.get('host');
    let imgSrc = `${protocol}://${host}/images/${img.filename}`;
    const newMaleProduct = await Male.create({
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
      description: req.body.description,
      photo: imgSrc
    });

    res.status(201).json(newMaleProduct);

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
Male.update({
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
        res.status(404).json({ message: 'No product found with this id' });
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
  // delete a product by its `id` value
  Male.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      if(!data) {
          res.status(404).json({ message: 'No product found with this id' });
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
