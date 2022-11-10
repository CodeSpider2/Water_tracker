const Joi = require("joi");
const schema_1 = Joi.object({
  name: Joi.string().required(),
  contact: Joi.string().required(),
  meterNumber: Joi.required(),
  initialUnits: Joi.number().required(),
  finalUnits: Joi.string().required(),
  consumedUnits: Joi.number().required(),
  unitCost: Joi.number().required(),
  totalCost: Joi.number().required(),
  paid: Joi.number().required(),
  balance: Joi.number().required(),
});

module.exports = schema_1;