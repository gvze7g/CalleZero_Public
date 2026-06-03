import adminModel from "../models/administrador.js";

//creamos un array de funciones
const adminController = {};

//SELECT
adminController.getAdmin = async (req, res) => {
  try {
    const admin = await adminModel.find();
    return res.status(200).json(admin);
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//DELETE
adminController.deleteAdmin = async (req, res) => {
  try {
    const deletedAdmin = await adminModel.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedAdmin) {
      return res.status(404).json({ message: "admin not found" });
    }

    return res.status(200).json({ message: "admin deleted" });
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//UPDATE
adminController.updateAdmin = async (req, res) => {
  try {
    //Solitamos los datos
    let {
      name,
      email,
      password,
      isActive,
      isVerified,
      loginAttemps,
      createdAt,
      timeOut
    } = req.body;

    //VALIDACIONES
    //Sanitizar
    name = name?.trim();
    email = email?.trim();

    //validar el tamaño del nombre
    if (name.length < 3 || name.length > 15) {
      return res.status(400).json({ message: "Invalid name" });
    }

    //Actualizamos
    const updatedAdmin = await adminModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        password,
        isActive,
        isVerified,
        loginAttemps,
        createdAt,
        timeOut
      },
      { new: true },
    );

    if (!updatedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    return res.status(200).json({ message: "Admin updated" });
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default adminController;