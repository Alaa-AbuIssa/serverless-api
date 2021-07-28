const uuid=require('uuid').v4;
const peopleModels=require('./people.schema');

exports.handler=async (event)=>{

    try{

        const {name,age}=JSON.parse(event.body);
        const recordData={
        id: uuid(),
        name:name,
        age:age,
        }
    
        const record= new peopleModels(recordData);
        const savedData= await record.save();
        return {
            status:200,
            body:JSON.stringify(savedData),
    
        };
    }catch(err){

        return {
            status:500,
            message:err.message,
    
        };
    }
}