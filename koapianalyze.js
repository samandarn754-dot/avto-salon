import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
app.use(bodyParser.json());

// POST endpoint for car image analysis
app.post("/analyze", async (req, res) => {
  const { imageUrl } = req.body;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDERej2MU-QqDplYomtnYbBMcR1CecCZIo",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: "Analyze this car image and describe it." },
                { image_url: imageUrl }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Run server
app.listen(3000, () => console.log("Server running on port 3000"));


