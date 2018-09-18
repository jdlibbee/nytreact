const router = require("express").Router();
const artilcesController = require("../../controllers/articlesController");

router.route("/")
    .get(artilcesController.findAll)
    .get(artilcesController.create);

router
    .route("/:id")
    .get(artilcesController.findById)
    .put(artilcesController.update)
    .delete(artilcesController.remove);

module.exports = router;