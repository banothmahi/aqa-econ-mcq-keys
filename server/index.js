import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const dataDir = path.join(__dirname, "..", "data");

app.get("/keys/:year", (req, res) => {
  const year = req.params.year;
  const file = path.join(dataDir, `aqa_7136_${year}_key.json`);
  if (fs.existsSync(file)) {
    const data = JSON.parse(fs.readFileSync(file, "utf-8"));
    res.json(data);
  } else {
    res.status(404).json({ error: "Year not found" });
  }
});

app.get("/keys", (req, res) => {
  const file = path.join(dataDir, "combined_keys.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`AQA keys API running on port ${PORT}`));
