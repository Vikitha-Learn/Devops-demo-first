const fs = require("fs");

console.log("Checking for app.py...");

if (!fs.existsSync("app.py")) {
  console.error("FAIL: app.py was not found.");
  process.exit(1);
}

console.log("PASS: app.py exists.");
