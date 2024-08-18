import express from "express";
import { getAllProduct } from "../controller/product.js";
import { getAProduct } from "../controller/product.js";
import { deleteProduct } from "../controller/product.js";
import { postAProduct } from "../controller/product.js";
import { putAProduct } from "../controller/product.js";
// import { products } from "../Utilis/database.js";

const router = express.Router();

router.get("/", getAllProduct);

router.get("/:id", getAProduct);

router.delete("/:id", deleteProduct);

// create new product
router.post("/", postAProduct);

// update product
router.put("/", putAProduct);

export default router;