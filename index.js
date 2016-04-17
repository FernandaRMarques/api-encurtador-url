import express from "express";
const PORT = 3000;
const app = express();
app.get("/", (req, res) => res.json({status: "API - Encurtar Url"}));
app.listen(PORT, () => console.log('API - Encurtar Url - porta :'+ PORT));