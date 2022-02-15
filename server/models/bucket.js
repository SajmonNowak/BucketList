import { Mongoose } from "mongoose";

const bucketSchema = new Mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
        ref: User
    },
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
    category: String
},
{
    timestamps: true
})


const Bucket = mongoose.model("Bucket", bucketSchema)

module.exports = Bucket;
