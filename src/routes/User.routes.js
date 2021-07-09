const { Router } = require("express");
const { getUser, postUser, putUser, deleteUser } = require("../controllers/user.controller");

const router = Router();
router.get("/user/:id", getUser)
  .get("/users", getUser)
  .post("/user", postUser)
  .put("/user/:id", putUser)
  .delete("/user/:id", deleteUser)
module.exports = router;
