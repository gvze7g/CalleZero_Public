//PromotionModel: name,type,value,startDate,endDateactive,appliesTo
import modelPromotion from "../models/promotions";

const controllerPromotion = {};

controllerPromotion.getAll = async (req,res) => {
    try {
        const promotion = await modelPromotion.find()
        return res.status(200).json(promotion);
    } catch (error) {
        console.log("Error: " + error);
        return res.status(500).json({ message: "Internal server error"});
    }
}

controllerPromotion.getPromotionById = async (req, res) => {
  try {
    const promotion = await modelPromotion
      .findById(req.params.id)

    if (!promotion) {
      return res.status(404).json({ message: "promotion not found" });
    }

    return res.status(200).json(promotion);
  } catch (error) {
    console.log("Error: " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

controllerPromotion.InsertPromotions = async (req,res) => {
    try {
        const {name,type,value,startDate,endDateactive,appliesTo} = req.body;
        const newPromotion = new modelPromotion({name,type,value,startDate,endDateactive,appliesTo});
        await newPromotion.save();
        res.status(201).json({message:"New Promotion Saved"})
    } catch (error) {
        console.log("Error: " + error);
        return res.status(500).json({ message: "Internal server error"});
    }
}



controllerPromotion.updatePromotion = async (req,res) => {
    try {
        const {name,type,value,startDate,endDateactive,appliesTo} = req.body;
        await modelPromotion.findByIdAndUpdate(req.params.id,{name,type,value,startDate,endDateactive,appliesTo},{new:true});
        res.status(200).json({message:"Promotion has Updated"});
    } catch (error) {
        console.log("Error: " + error);
        return res.status(500).json({ message: "Internal server error"}); 
    }
}


controllerPromotion.deletePromotion = async (req,res) => {
    try {
        const promotion = await modelPromotion.findByIdAndDelete(req.params.id);
        if(!promotion){
            return res.status(404).json({message:"Promotion not found"});
        }
        return res.status(200).json({message:"Promotion has been Deleted"})
    } catch (error) {
        console.log("Error: " + error);
        return res.status(500).json({ message: "Internal server error"});   
    }
}

export default controllerPromotion;