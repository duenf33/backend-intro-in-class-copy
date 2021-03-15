var express = require("express");
var router = express.Router();
var {
	createList,
	getList,
	deleteByID,
	updateByID,
} = require("./controller/movieController");

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("index", { title: "Express" });
});

router.post("/create-movie-list", createList);

router.get("/get-movie-list", getList);

router.delete("/delete-by-id/:id", deleteByID);

router.put("/update-by-id/:id", updateByID);

module.exports = router;
