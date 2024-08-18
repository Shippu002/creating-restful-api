import express from "express";
import { getAllUser } from "../controller/user.js";
import { getAUser } from "../controller/user.js";
import { deleteUser } from "../controller/user.js";
import { postAUser } from "../controller/user.js";
import { putAUser } from "../controller/user.js";
// import { users } from "../Utilis/database.js";

const router = express.Router();

router.get("/", getAllUser)

router.get("/:id", getAUser);

router.delete("/:id", deleteUser);

// create new user
router.post("/", postAUser);

// update user
router.put("/", putAUser);

export default router;