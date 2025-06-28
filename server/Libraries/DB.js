import { connect } from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

  const DataBaseConnection=async()=>{
    try{
        await connect(process.env.CONNECTION_STRING);
        console.log("mongoDB connected successfully...")
    }catch(err){
        console.error("mongoDB connection is failed...",err.message)
        process.exit(1)
    }
}

export default DataBaseConnection;
