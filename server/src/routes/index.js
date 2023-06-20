const { Router } = require("express")
const getActivity = require('../controllers/getActivity')
const getCountries = require('../controllers/getCountries')
const getCountryDetail = require('../controllers/getCountryDetail')
const getCountriesName = require('../controllers/getCountriesName')
const postActivity = require('../controllers/postActivity')
const router = Router()

router.get('/countries/name',getCountriesName)//por query
router.get('/countries',getCountries)
router.get('/countries/:idPais',getCountryDetail)
router.post('/activities',postActivity)
router.get('/activities',getActivity)
module.exports = router;


