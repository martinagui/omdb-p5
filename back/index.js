// server configs
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

let port = 1234;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
