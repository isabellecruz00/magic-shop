const express = require("express");
const router = express.Router();

const controller = require("../controllers/prodTroca-controller");
		
router.get("/", controller.get);
router.post("/", controller.post);
router.get("/:id", controller.getById);
router.get("/:nome", controller.getByName);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);
router.get("*", function (req, res) {
    res.send("what???", 404);
  });

module.exports = router;