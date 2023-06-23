
const {Activity} = require("../db")
const {country_activity}= require ("../db")
const getActivity = async (req,res)=>{
    try {
        const activities= await Activity.findAll()
        const c_activity= await country_activity.findAll()
        const r=[activities,c_activity]
        if(!activities.length) return res.send('No hay actividades')
        return res.json(r);
    } catch (error) {
        return res.status(500).json(error.message)
    }
   
}
module.exports=getActivity