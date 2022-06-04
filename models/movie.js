const mongoose = require("mongoose");
const { Schema } = mongoose;

const MovieSchema = new Schema(
    {
        title : {type : String, required : true},
        url : String,
        screenGrade : {type : String, required : true},
        genre : {type : String, required : true, default : "액션"},
        runtime : {type : String, require : true},
        openingDate : {type : Date, require : true},
    },
);
const Movie = mongoose.model("Movie", MovieSchema);
module.exports = { Movie };