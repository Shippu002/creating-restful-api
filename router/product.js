import express from "express";
import { products } from "../Utilis/database.js";

const router = express.Router();

router.get("/", (req, res) => {
  // res.send(products)
  res.status(200).json({
    products,
    message: "product successfully received",
  });
});

router.get("/:id", (req, res) => {
  // console.log(req.params)
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    res.status(404).json({
      message: `product with id = ${id} is not found`,
    });
  } else {
    res.status(200).json({
      product,
      message: "product successfully received",
    });
  }
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let deletedproduct = products.filter((product) => product.id !== id);
  if (!deletedproduct) {
    res.status(404).json({
      message: `product with the id = ${id} is not found`,
    });
  } else {
    res.json({
      message: `product id = ${id} successfully deleted`,
    });
  }
});

// create new product
router.post("/", (req, res) => {
  // console.log(req.body)
  const newproduct = {
    id: products.length + 1,
    type: req.body.type,
    licence: req.body.licence,
  };
  products.push(newproduct);
  res.status(201).json({
    products,
    message: "Product succesfully created",
  });
});

// update product
router.put("/", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    res.status(404).json({
      message: `Product with the id = ${id} is not found`,
    });
  }
  product.type = req.body.type;
  product.licence = req.body.licence;
  res.status(200).json({
    product,
    message: "Product succesfully updated",
  });
});

export default router;