import mongoose from "mongoose"



const Connection = async (username,password) =>{
    const URL =`mongodb://${username}:${password}@ac-texikol-shard-00-00.m5sly7d.mongodb.net:27017,ac-texikol-shard-00-01.m5sly7d.mongodb.net:27017,ac-texikol-shard-00-02.m5sly7d.mongodb.net:27017/KOLLAMPALLY?ssl=true&replicaSet=atlas-eb6sz6-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
    try {
        console.log('Database connected successfully');
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true})
    } catch (error) {
        console.log('Error while connecting with the database', error)
    }
}

export default Connection;