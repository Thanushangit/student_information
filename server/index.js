import express from 'express';

import router from './Routes/StudentRoutes.js';
import DataBaseConnection from './Libraries/DB.js';



const app=express();

const PORT=1212;

app.use(express.json());



DataBaseConnection();

app.use("/student",router)


app.listen(PORT,()=>{
    console.log(`The app is running in the ${PORT} Port...`)
})