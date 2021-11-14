const router = require('express').Router();
const {Review} = require('../../models');
const withAuth = require('../../utils/auth');

// GET /api/Reviews
router.get('/', (req, res) => {
  Review.findAll()
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// POST /api/Reviews withAuth
router.post('/', withAuth, (req, res) => {
  if(req.session) {
    Review.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id
    })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const reviewToDelete = await Review.findOne({where: {id: req.params.id}});
    if (!reviewToDelete) res.status(404).json("Not Found");
    if(reviewToDelete.user_id === req.session.user_id) {
      await Review.destroy({where: {id: req.params.id}});
      return res.json("Deleted Succesfully");
    }
    res.json("not Authorized");
  } catch (error) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;