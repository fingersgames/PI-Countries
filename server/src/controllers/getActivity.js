
const {Activity} = require("../db")
const getActivity = async (req,res)=>{
    try {
        const f= await Activity.findAll()
        if(!f.length) return res.status(400).send('No hay actividades')
        return res.json(f);
    } catch (error) {
        return res.status(500).json(error.message)
    }
   
}
module.exports=getActivity