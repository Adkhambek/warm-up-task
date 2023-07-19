const router = require("express").Router();

const fundRoutes = require("./campaign");

router.use("/campaigns", fundRoutes);

module.exports = router;
