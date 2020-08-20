const router = require("express").Router();
const artistController = require("../../controllers/artistController");

// Matches with "/api/books"
router.route("/artist")
  .get(artistController.findAll)
  .post(artistController.create);

// Matches with "/api/books/:id"
router
  .route("/artist/:id")
  .get(artistController.findById)
  .put(artistController.update)
  .delete(artistController.remove);

module.exports = router;
