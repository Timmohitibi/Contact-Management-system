const {constants} = require('../constants');

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode: 500;
  switch (statusCode) {
    case VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      })
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
      case constants.UNAUTHORIZED:
      res.json({
        title: "unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
      case constants.FORBIDDEN:
      res.json({
        title: "forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
      case constants.SERVER_error:
      res.json({
        title: "server error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
      default:
        console.log("No error")
       break;
}
};

module.exports = errorHandler;