import { users } from "../Utilis/database.js";

export const getAllUser = (req, res) => {
  res.status(200).json({
    users,
    message: "User successfully received",
  });
};

export const getAUser = (req, res) => {
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
};

export const deleteUser = (req, res) => {
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
};

export const postAUser = (req, res) => {
  // console.log(req.body)
  const newuser = {
    id: users.length + 1,
    title: req.body.title,
    desc: req.body.desc,
  };
  users.push(newuser);
  res.status(201).json({
    users,
    message: "User succesfully created",
  });
};

export const putAUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((p) => p.id === id);
  if (!user) {
    res.status(404).json({
      message: `User with the id = ${id} is not found`,
    });
  }
  user.title = req.body.title;
  user.desc = req.body.desc;
  res.status(200).json({
    user,
    message: "User succesfully updated",
  });
};
