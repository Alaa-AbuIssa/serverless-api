const peopleModels=require('./people.schema');

exports.handler=async (event)=>{

    try {
        const id = event?.pathParameters?.id;
        const { name, age } = JSON.parse(event.body);
    
        let dataResponse = await peopleModels.update(
          { id },
          { name, age }
        );
    
        return {
          statusCode: 200,
          body: JSON.stringify(dataResponse),
        };
      } catch (err) {
        return {
          status: 500,
          message: err.message,
        };
      }
    };