const express = require("express");
const { connnection } = require("./db");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/userRoutes");

const { auth } = require("./middleware/auth");
const { blogRouter } = require("./routes/blogRoutes");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/users", userRouter); //get

app.use(auth); //middleware

app.use("/blogs", blogRouter);


app.listen(process.env.PORT, async () => {
  try {
    await connnection;
    console.log("connected with db");
  } catch (error) {
    console.log({ msg: error.message });
  }
  console.log(`server is running at port ${process.env.PORT}`);
});

