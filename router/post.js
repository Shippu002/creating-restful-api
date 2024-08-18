import express from "express";
import { posts } from "../Utilis/database.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("<h1>Hello Cohort 4 api</h1>");
// });
// router.get("/about", (req, res) => {
//   res.send("<h1>This is about us page</h1>");
// });
// router.get("/contact", (req, res) => {
//   res.send("<h1>This is contact us page</h1>");
// });

// get all posts
router.get("/", (req, res) => {
  // res.send(posts)
  res.status(200).json({
    posts,
    message: "Post successfully received",
  });
});

// get a single post
// router.get("/api/v1/posts/:id", (req, res) => {
//   // console.log(req.params)
//   const id = parseInt(req.params.id)
//   res.send(posts.filter((post) => post.id === id))
// })
router.get("/:id", (req, res) => {
  // console.log(req.params)
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) {
    res.status(404).json({
      message: `Post with id = ${id} is not found`,
    });
  } else {
    res.status(200).json({
      post,
      message: "Post successfully received",
    });
  }
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let deletedPost = posts.filter((post) => post.id !== id);
  if (!deletedPost) {
    res.status(404).json({
      message: `Post with the id = ${id} is not found`,
    });
  } else {
    res.json({
      message: `Post id = ${id} successfully deleted`,
    });
  }
});

// create new post
router.post("/", (req, res) => {
  // console.log(req.body)
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    desc: req.body.desc,
  };
  posts.push(newPost);
  res.status(201).json({
    posts,
    message: "Post succesfully created",
  });
});

// update post
router.put("/", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) {
    res.status(404).json({
      message: `Post with the id = ${id} is not found`,
    });
  }
  post.title = req.body.title;
  post.desc = req.body.desc;
  res.status(200).json({
    post,
    message: "Post succesfully updated",
  });
});


export default router;