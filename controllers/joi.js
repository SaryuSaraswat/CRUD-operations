// controllers/joi.js
const Joi = require('joi');

const postCarSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required()
});

module.exports = {
    postCarSchema
};

