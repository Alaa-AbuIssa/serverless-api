'use strict';

const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
    id: String,
    name:String,
    age:Number,
});

const peopleModels =dynamoose.model('people',peopleSchema);

module.exports=peopleModels;