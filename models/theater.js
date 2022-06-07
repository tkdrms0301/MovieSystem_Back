const mongoose = require("mongoose");
const { Schema } = mongoose;

const TicketingSchema = new Schema(
    {
        title : {type : String, required : true},
        url : String,
        screenGrade : {type : String, required : true},
        genre : {type : String, required : true, default : "액션"},
        runtime : {type : String, require : true},
        openingDate : {type : Date, require : true},
    },
);
const Ticketing = mongoose.model("Ticketing", TicketingSchema);
module.exports = { Ticketing };