import categoriesModel from "../models/categories.js";

//SELECT
export const getCategories = async (req, res) => {
  const categories = await categoriesModel.find();
  res.json(categories);
};

//INSERT
 export const insertCategories = async (req, res) => {
  const { name, description, isActive } = req.body;
  const newCategorie = new categoriesModel({ name, description, isActive });
  await newCategorie.save();
  res.json({ message: "Categorie save" });
};

//UPDATE
export const updateCategories = async (req, res) => {
  const { name, description, isActive } = req.body;
  await categoriesModel.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      isActive,
    },
    { new: true },
  );

  res.json({ message: "categorie updated" });
};

//DELETE
export const  deleteCategories = async (req, res) => {
  await categoriesModel.findByIdAndDelete(req.params.id);
  res.json({ message: "categories deleted" });
};
