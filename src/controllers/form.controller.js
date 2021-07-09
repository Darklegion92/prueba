const Form = require("../models/Form");


const createForm = async (req, res) => {
  try {
    if (req.files.file.size <= 5120000) {
      // creating a new User
      const form = new Form({ ...req.body, file: req.files.file });

      // saving the new user
      const saveForm = await form.save();


      return res.status(200).json({
        message: 'Usuario creado correctamente'
      });
    }else{
      return res.status(400).json({
        message: 'Archivo supera el máximo permitido 5Mb'
      });
    }
  } catch (error) {
    console.error(error);
  }
};


module.exports = { createForm }
