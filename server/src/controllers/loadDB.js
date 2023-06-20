
const dborigin =require('../../api/db.json')
const {Country} = require('../db.js')

const loadDB = async ()=>{
   
        try {
          let db=dborigin.countries.map(coun => {
              return {
                  id: coun.cca3,
                  name: coun.name.common,
                  flagImage:coun.flags.png,
                  continent:coun.continents[0],
                  capital:coun.capital?coun.capital[0]:"No tiene capital",
                  subregion:coun.subregion,
                  area:coun.area,
                  population:coun.population,
              }  
          }) 
          await  Country.bulkCreate(db)

        } catch (error) {
            return error.message
        }
      }
module.exports=loadDB
