import userModel from "../models/users.js";

const usersProfileController = {};

usersProfileController.getCurrentUser = async (req, res) => {
  try {
    console.log("📍 GET /me - User ID:", req.user?.id);

    if (!req.user) {
      return res.status(401).json({ message: "No autenticado" });
    }

    const user = await userModel.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    console.log("✅ Usuario encontrado:", user.email);
    return res.status(200).json(user);
  } catch (error) {
    console.log("❌ Error getting current user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

usersProfileController.updateProfile = async (req, res) => {
  try {
    const { fullName, name, email, phone, location } = req.body;

    console.log("📍 PUT /me - Actualizando:", req.user?.id);

    if (!req.user) {
      return res.status(401).json({ message: "No autenticado" });
    }

    // Validaciones
    if (fullName && (fullName.length < 3 || fullName.length > 50)) {
      return res.status(400).json({ message: "El nombre debe tener entre 3 y 50 caracteres" });
    }

    const updateData = {};
    if (fullName) updateData.fullName = fullName;
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (phone !== undefined) updateData.phone = phone;
    if (location !== undefined) updateData.location = location;

    const updatedUser = await userModel.findByIdAndUpdate(
      req.user.id,
      updateData,
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    console.log("✅ Perfil actualizado:", updatedUser.email);
    return res.status(200).json({
      message: "Perfil actualizado correctamente",
      user: updatedUser,
    });
  } catch (error) {
    console.log("❌ Error updating profile:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

export default usersProfileController;