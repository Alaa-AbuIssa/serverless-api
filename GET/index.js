const poepleModels = require('./people.schema');

exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    let dataResponse;
    if (id) {
      results  = await poepleModels.query('id').eq(id).exec();
      dataResponse = results [0];
    } else {
      dataResponse = await poepleModels.scan().exec();
    }

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