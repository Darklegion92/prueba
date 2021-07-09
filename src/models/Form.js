const { Schema, model } = require("mongoose")

const formSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    identificationType: {
      type: String,
    },
    identification: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    birthdate: {
      type: String,
    },
    file: {
      type: Object,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


module.exports = model("Form", formSchema);
