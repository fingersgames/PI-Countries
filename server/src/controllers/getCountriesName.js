const { Sequelize } = require("sequelize")
const {Country} = require("../db")

const getCountriesName= async (req,res)=>{
try {
    const {name}=req.query
    console.log('name')
    if(!name) return res.status(400).send('Falta Nombre')
    let paises = await Country.findAll({where:{name:{[Sequelize.Op.iLike]:`%${name}%`}}})
    if(paises.length===0) {
        return res.send([])
    }
    return res.json(paises)
}
catch(error){
    return res.status(500).json(error.message)
}

}
module.exports=getCountriesName
