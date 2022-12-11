const jsonschema = require("jsonschema"); 
const ExpressError = require('../helpers/expressError');

function validateJsonSchema(requestBody, schema) {
    const validator = jsonschema.validate(requestBody, schema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new ExpressError(errs, 400);
    }
}

module.exports = validateJsonSchema;