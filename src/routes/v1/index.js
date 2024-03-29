const express=require('express');
const CityController=require('../../controllers/city-controller');
const FlightController=require('../../controllers/flight-controller');
const AirportController=require('../../controllers/airport-controller');

const {FlightMiddleware}=require('../../middlewares/index')

const router=express.Router();

router.post('/city',CityController.create);
router.patch('/city/:id',CityController.update);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);

router.post('/flights',FlightMiddleware.validateCreateFlight,FlightController.create);
router.get('/flights/:id',FlightController.getFlight)
router.get('/flights',FlightController.getAllFlights)
router.patch('/flights/:id',FlightController.update)

router.post('/airports',AirportController.create)

module.exports=router;

