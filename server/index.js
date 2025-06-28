import express from "express";

import router from "./Routes/StudentRoutes.js";
import DataBaseConnection from "./Libraries/DB.js";
import cors from 'cors'

const app = express();

const PORT = process.env.PORT || 1212;

app.use(express.json());

DataBaseConnection();
app.use(cors())
app.use("/student", router);

app.listen(PORT, () => {
  console.log(`The app is running in the ${PORT} Port...`);
});
