const  mongoose  = require("mongoose");
const  Schema  =  mongoose.Schema;

const chatSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    // likes:{
    //     type: Number,
    //     required: true
    // },
    date:{
        type: Date,
        default: Date.now
    }
})

let  Chat  =  mongoose.model("Chat", chatSchema);
module.exports  =  Chat;