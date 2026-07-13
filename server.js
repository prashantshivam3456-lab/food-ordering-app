const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let foodItems = [
  { id: 1, name: "Pizza", price: 199 },
  { id: 2, name: "Burger", price: 149 },
  { id: 3, name: "Pasta", price: 179 }
];

app.get("/foods", (req, res) => {
  res.json(foodItems);
});

app.post("/order", (req, res) => {
  res.json({ message: "Order placed successfully" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});