const express = require("express");
const { connectDB } = require("./db");

const app = express();

// app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/quran", require("./routes/quran.route"));
app.use("/api/adhan", require("./routes/adhan.route"));
app.use("/api/verse", require("./routes/verse.route"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
