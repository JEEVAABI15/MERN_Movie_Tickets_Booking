const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
  name: 
  { 
    type: String, 
    required: true 
},
  location: 
  { 
    type: String, 
    required: true 
},
  seatingCapacity: 
  { 
    type: Number, 
    default: 60 
},
});

const Theatre = mongoose.model('Theatre', theatreSchema);
module.exports = Theatre;
