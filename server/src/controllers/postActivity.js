const {Activity} = require('../db')
const {Country} =require('../db')
const postActivity = async (req,res)=>{

        const {name, difficulty, duration, season, countries} = req.body
        
        if(name&&difficulty>0&&difficulty<6&&(season==='Verano'||season==='Invierno'||season==='Otoño'||season==='Primavera')&&countries.length!=0){//VER COUNTRI
            const idPais=await Country.findAll({where:{id:countries}})
            if (countries.length !== idPais.length) return res.status(400).send('No se encontraron pais/es')
            
            const act={name,difficulty,duration,season}
            const f=await Activity.findOrCreate({where:act})
            
            if(!f[f.length-1]) return res.status(401).send('Ya existe actividad')
            
            try {
                await f[0].addCountries(countries)
                return res.send('Actividad Creada')
            }
            catch (error) {
                return res.status(400).send(error.message)
            }
            
            
        }
        return res.status(402).send('Faltan datos')
    }
module.exports=postActivity
