const User = require("../models/User");


const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    let user = {}
    // encrypting password
    if (id) {
      user = await User.findById(id);
    } else {
      user = await User.find();
    }
    if (id) {
      return res.status(200).json(user);

    }
    return res.status(200).json({
      total: user.length,
      data: user
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const postUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // creating a new User
    const user = new User({
      username,
      email,
      password,
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json(savedUser);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;

    // creating a new User
    const user = {
      username,
      email,
      password,
    }

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const updateUser = await User.updateOne({ _id: id }, user);
    if (updateUser.nModified > 0) {
      return res.status(200).json({ message: "Usuario actualizado correctamente" });
    }
    return res.status(201).json({ message: "No se encontro el usuario" });
  } catch (error) {
    return res.status(500).json({ error });
  }

};
const deleteUser = async (req, res) => {

  try {
    const { id } = req.params;

    const deleteUser = await User.deleteOne({ _id: id });
    if (deleteUser.deletedCount > 0) {
      return res.status(200).json({ message: "Ususario eliminado correctamente" });
    }
    return res.status(200).json({ message: "Usuario no encontrado" });

  } catch (error) {
    return res.status(500).json({ error });
  }

};

module.exports = { getUser, postUser, putUser, deleteUser }
