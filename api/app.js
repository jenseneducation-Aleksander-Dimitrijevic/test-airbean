const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

const beansRouter = require("./routes/beans");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/beans", beansRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/public")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "index.html"));
  });
}

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public", "index.html"));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
