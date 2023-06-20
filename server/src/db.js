require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Country, Activity} = sequelize.models;

// Aca vendrian las relaciones
Country.belongsToMany(Activity, { through: 'country_activity' });
Activity.belongsToMany(Country, { through: 'country_activity' });

// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js'); AL DECIR ... EXPORTO EL CONTENIDO NO EL OBJETO
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};





















// require('dotenv').config();
// const { Sequelize } = require('sequelize');
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// const CountryModel =require('./models/Country')
// const ActivityModel =require('./models/Activity')
// // EJERCICIO 03
// // A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// // Recuerda pasarle la información de tu archivo '.env'.

// // URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
//    // URL
//    { logging: false, native: false }
// );


// // EJERCICIO 05
// // Debajo de este comentario puedes ejecutar la función de los modelos.

// //
// CountryModel(sequelize)
// ActivityModel(sequelize)
// //

// // Ejercicio 06
// // ¡Relaciona tus modelos aquí abajo!

// const { Country, Activity } = sequelize.models;

// Country.belongsToMany(Activity, {through: 'country_activity'});
// Activity.belongsToMany(Country, {through: 'country_activity'});


// module.exports = {
//    Country,
//    Activity,
//    conn: sequelize,
// };
