const {Activity} = require('../db')
const {Country} =require('../db')
const postActivity = async (req,res)=>{
        console.log('________________________________________')
        const {name, difficulty, duration, season, countries} = req.body
        let countriesF=countries
        if(name&&difficulty>0&&difficulty<6&&(season==='Verano'||season==='Invierno'||season==='Otoño'||season==='Primavera')&&countries.length!=0){//VER COUNTRI
            const idPais=await Country.findAll({where:{id:countries}})
            if (countries.length !== idPais.length) return res.status(400).send('Pais/es incorrecto/s')
            const act={name,difficulty,duration,season}
            const [activity, created]=await Activity.findOrCreate({where:act})
            if(!created) {
                // countriesId=await country_activity.findAll({where:{CountryId:f.id}})
                // const countryIds = countriesId.map(e => e.CountryId);
                // countries = countries.filter(country => !countryIds.includes(country));
                const countriesA = await activity.getCountries();
                countriesF = countriesA.map(e => e.id);
                console.log('countryIDs',countriesF)
                countriesF = countries.filter(country => !countriesF.includes(country));
                console.log('countryIDs',countriesF)

            }
            try {
                if (countriesF.length!=0){
                    await activity.addCountries(countriesF)
                    return res.send('Actividad Creada')
                } else return res.status(402).send('Ya existe actividad')
            }
            catch (error) {
                return res.status(400).send(error.message)
            }
            
            
        }
        return res.status(402).send('Faltan datos')
    }
module.exports=postActivity
