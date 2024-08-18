import express from "express";
import postRoute from "./router/post.js"
import userRoute from "./router/user.js"
import productRoute from "./router/"


// initialize express app
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 3000;



app.use("/api/v1/posts", postRoute)
app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productRoute);

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
