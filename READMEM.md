# AQA Paper 3 (7136/3) Economics – MCQ Answer Keys

This repo contains machine-readable answer keys for Section A (30 MCQs) for AQA A‑level Economics Paper 3 (7136/3) for the years 2017, 2018, 2019, and 2020. It also includes a tiny Express API to serve these keys.

## What’s inside
- `data/aqa_7136_2017_key.json` … `data/aqa_7136_2020_key.json`
- `data/combined_keys.json` (all years in one file)
- `data/keys.csv` (flat table: year, question, answer)
- `server/index.js` (Express API)
- `package.json`

## Run locally
```bash
# 1) Install deps
npm install

# 2) Start API
npm start

# 3) Endpoints
#   All years:       GET http://localhost:3000/keys
#   Specific year:   GET http://localhost:3000/keys/2019
```

## How to push to GitHub
```bash
# Replace <your-repo> with your GitHub repo name
git init
git add .
git commit -m "Add AQA 7136/3 MCQ keys and minimal API"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Attribution
Answers are transcribed from AQA official mark schemes for Paper 3 (7136/3).
