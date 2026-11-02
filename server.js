const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const { email, password } = req.body;

    const user = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    res.json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email
      }
    });

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
