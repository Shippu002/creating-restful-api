import { products } from "../Utilis/database.js";

export const getAllProduct = (req, res) => {
  res.status(200).json({
    products,
    message: "Product successfully received",
  });
};

export const getAProduct = (req, res) => {
  // console.log(req.params)
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    res.status(404).json({
      message: `Product with id = ${id} is not found`,
    });
  } else {
    res.status(200).json({
      product,
      message: "Product successfully received",
    });
  }
};

export const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  let deletedproduct = products.filter((product) => product.id !== id);
  if (!deletedproduct) {
    res.status(404).json({
      message: `Product with the id = ${id} is not found`,
    });
  } else {
    res.json({
      message: `Product id = ${id} successfully deleted`,
    });
  }
};

export const postAProduct = (req, res) => {
  // console.log(req.body)
  const newproduct = {
    id: products.length + 1,
    title: req.body.title,
    desc: req.body.desc,
  };
  products.push(newproduct);
  res.status(201).json({
    products,
    message: "Product succesfully created",
  });
};

export const putAProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    res.status(404).json({
      message: `Product with the id = ${id} is not found`,
    });
  }
  product.title = req.body.title;
  product.desc = req.body.desc;
  res.status(200).json({
    product,
    message: "Product succesfully updated",
  });
};
