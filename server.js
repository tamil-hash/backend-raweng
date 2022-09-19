import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//database config
import dbConfig from "./src/config/database.js";

//routes
import authRoutes from "./src/routes/authRoutes.js";

const app = express();

//configs
dbConfig();
dotenv.config({ path: ".env" });

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT ${process.env.PORT}`);
});

