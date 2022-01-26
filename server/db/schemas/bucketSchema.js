import { Mongoose } from "mongoose";

const bucketSchema = new Mongoose.Schema({
    heading:{
        type: String,
        required: true,
    } ,
    descr: String,
    date_created: {
        type: Date,
        required: true,
    },
    date_finished: Date,
    category: String, 
})


const Bucket = mongoose.model("Bucket", bucketSchema)

module.exports = Bucket;
