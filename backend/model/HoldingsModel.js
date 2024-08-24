const {model} =require("mongoose");
const {HoldingSchema}=require ('../schema/HoldingSchema.js');

const HoldingsModel=new model("holding",HoldingSchema);;

module.exports={HoldingsModel};
