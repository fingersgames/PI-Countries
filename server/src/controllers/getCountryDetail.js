
const {Country} = require("../db")
const getCountryDetail = async (req,res)=>{
    const {idPais}=req.params
    try {
        if (idPais) {
            const f= await Country.findByPk(idPais)
            if(!f) return res.status(400).send('Detalle de pais no encontrado')
            return res.json(f);
        }
        return res.status(400).send("Falta id")

    } catch (error) {
        return res.status(500).json(error.message)
    }
   
}
module.exports=getCountryDetail

