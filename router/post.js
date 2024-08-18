import express from "express";
import { getAllPost } from "../controller/post.js";
import { getAPost } from "../controller/post.js";
import { deletePost } from "../controller/post.js";
import { postAPost } from "../controller/post.js";
import { putAPost } from "../controller/post.js";
// import { posts } from "../Utilis/database.js";

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
router.get("/", getAllPost);

// get a single post
// router.get("/api/v1/posts/:id", (req, res) => {
//   // console.log(req.params)
//   const id = parseInt(req.params.id)
//   res.send(posts.filter((post) => post.id === id))
// })
router.get("/:id", getAPost);

router.delete("/:id", deletePost);

// create new post
router.post("/", postAPost);

// update post
router.put("/", putAPost);

export default router;
