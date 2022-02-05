import { Mongoose } from "mongoose";

const bucketSchema = new Mongoose.Schema({
    heading:{
        type: String,
        required: true,
    } ,
    descr: String,
    dateCreated: {
        type: Date,
        required: true,
    },
    date_finished: Date,
    category: String, 
})


const Bucket = mongoose.model("Bucket", bucketSchema)

module.exports = Bucket;
