import mongoose from 'mongoose';

const Schema = mongoose.Schema;

 let Comment = new Schema({
     title:{
         type: String
     },
     responsible:{
         type:String
     },
    content:{
        type:String
    },
    date:{
        type:Date,
        default: new Date()
    }

 });

 export default mongoose.model('Comment', Comment)