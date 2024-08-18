import express from "express";
import { users } from "../Utilis/database.js";

const router = express.Router();

router.get("/", (req, res) => {
  // res.send(users)
  res.status(200).json({
    users,
    message: "User successfully received",
  });
});

router.get("/:id", (req, res) => {
  // console.log(req.params)
  const id = parseInt(req.params.id);
  const user = users.find((p) => p.id === id);
  if (!user) {
    res.status(404).json({
      message: `User with id = ${id} is not found`,
    });
  } else {
    res.status(200).json({
      user,
      message: "User successfully received",
    });
  }
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let deleteduser = users.filter((user) => user.id !== id);
  if (!deleteduser) {
    res.status(404).json({
      message: `User with the id = ${id} is not found`,
    });
  } else {
    res.json({
      message: `User id = ${id} successfully deleted`,
    });
  }
});

// create new user
router.post("/", (req, res) => {
  // console.log(req.body)
  const newuser = {
    id: users.length + 1,
    name: req.body.name,
    staffNumber: req.body.staffNumber,
  };
  users.push(newuser);
  res.status(201).json({
    users,
    message: "User succesfully created",
  });
});

// update user
router.put("/", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((p) => p.id === id);
  if (!user) {
    res.status(404).json({
      message: `User with the id = ${id} is not found`,
    });
  }
  user.name = req.body.name;
  user.staffNumber = req.body.staffNumber;
  res.status(200).json({
    user,
    message: "User succesfully updated",
  });
});

export default router;