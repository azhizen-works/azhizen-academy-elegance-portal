const express = require("express");
const cors = require("cors");
const slackAlertAcademicPage = require("./routes/slackAlertAcademicPage");

const app = express();

const allowedOrigins = [
  "http://localhost:8080",
];


app.use(cors({
  origin: function (origin, callback) {
    console.log("Incoming origin:", origin); // 🔥 debug log

    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS: " + origin));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));




// Parse JSON
app.use(express.json());

// Routes
app.use("/api", slackAlertAcademicPage);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
