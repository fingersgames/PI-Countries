
const {Country} = require("../db")
const getCountries = async (req,res)=>{
    try {
        const f= await Country.findAll()
        if(!f.length) return res.status(400).send('No hay paises')
        return res.json(f);
    } catch (error) {
        return res.status(500).json(error.message)
    }
   
}
module.exports=getCountries