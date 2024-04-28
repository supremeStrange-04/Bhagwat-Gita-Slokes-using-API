import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();
  // Scale and shift the random decimal to fit the range [min, max]
  const randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;
  return randomNumber;
}

app.get("/api/chapter", async (req, res) => {
  const ch = getRandomNumber(1, 18);
  try {
    const response = await fetch(`https://bhagavadgitaapi.in/chapter/${ch}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching external data:", error);
    res.status(500).json({ error: "Failed to fetch external data" });
  }
});

app.get("/api/slok", async (req, res) => {
  const ch = getRandomNumber(1, 18);
  const sl = getRandomNumber(1, 29);
  try {
    const response = await fetch(`https://bhagavadgitaapi.in/slok/${ch}/${sl}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching external data:", error);
    res.status(500).json({ error: "Failed to fetch external data" });
  }
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
