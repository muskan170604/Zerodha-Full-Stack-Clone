const {model} =require("mongoose");
const {PositionsSchema}=require ('../schema/POsitionsSchema.js');

const PositionsModel=new model("position",PositionsSchema);;

module.exports={PositionsModel};