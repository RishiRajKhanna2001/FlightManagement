const {Flight}=require('../models/index')

class FlightRepository{
   async createFlight(data){
    try {
        const flight=await Flight.create(data);
        return flight;
    } catch (error) {
        console.log("error in repository layer");
        throw {error};
    }
   } 
}

module.exports=FlightRepository;
