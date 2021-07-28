const poepleModels = require('./people.schema');

exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;

    let dataResponse = await poepleModels.delete({ id });
    let emptyObj = {};
    
    return {
      statusCode: 200,
      body: JSON.stringify(emptyObj),
    };
  } catch (err) {
    return {
      status: 500,
      message: err.message,
    };
  }
};