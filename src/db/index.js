import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'
const dbconnection= async()=>{
    try{
        const variablewith=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Connection is succesful")
        console.log(variablewith.connection.host)
    }
    catch(error){
        console.log("Connection is failed due to validation")
        process.exit(1)
    }

}
export default dbconnection