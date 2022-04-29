import { Joi, celebrate } from "celebrate";

export const headersCheck = celebrate({
  headers: Joi.object()
    .keys({
      authorization: Joi.string().required().messages({
        "string.base": `"authorization" should be a type of 'text'`,
        "string.empty": `unauthorized`,
        "any.required": `unauthorized`,
      }),
      language: Joi.string().valid("en", "ar").required().messages({
        "string.base": `"language" should be a type of 'text'`,
        "string.empty": `"language" cannot be an empty field`,
        "any.required": `"language" is a required field`,
      }),
      platform: Joi.string().valid("android", "ios").required().messages({
        "string.base": `"platform" should be a type of 'text'`,
        "string.empty": `"platform" cannot be an empty field`,
        "any.required": `"platform" is a required field`,
      }),
      "app-version": Joi.string()
        .regex(/^[0-9]+(\.[0-9]+)*$/)
        .required()
        .messages({
          "string.base": `"app-version" should be a type of 'text'`,
          "string.empty": `"app-version" cannot be an empty field`,
          "any.required": `"app-version" is a required field`,
        }),
    })
    .unknown(true),
});
