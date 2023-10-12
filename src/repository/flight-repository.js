const {Flight}=require('../models/index')
const {Op} =require('sequelize')
class FlightRepository{

    #createFilter(data){
         let filter={};
         if(data.arrivalAirportId)
         {
            filter.arrivalAirportId=data.arrivalAirportId;
         }
         if(data.departureAirportId)
         {
            filter.departureAirportId=data.departureAirportId;
         }
         let priceFilter=[];
         if(data.minPrice)
         {
            priceFilter.push({price:{[Op.gte]:data.minPrice}});
         }
         if(data.maxPrice)
         {
            priceFilter.push({price:{[Op.lte]:data.maxPrice}});
         }

         Object.assign(filter,{[Op.and]:priceFilter});

         return filter;
    }

   async createFlight(data){
    try {
        const flight=await Flight.create(data);
        return flight;
    } catch (error) {
        console.log("error in repository layer");
        throw {error};
    }
   } 

   async updateFlights(flightId,data){
    try {
        await Flight.update(data,{
         where:{
           id:flightId
         }
        });
        return true;
      } catch (error) {
         console.log("Something went wrong in the repository layer");
         throw {error};
      }
   } 

   async getFlight(flightId){
    try {
        const flight=await Flight.findByPk(flightId);
        return flight;
    } catch (error) {
        console.log("error in repository layer");
        throw {error};
    }
   } 

   async getAllFlight(filters){
    try {
       const filterObject=this.#createFilter(filters);
       const flights=await Flight.findAll({
        where:filterObject
       })

       return flights;
    } catch (error) {
        console.log("error in repository layer");
        throw {error};
    }
   } 
}

module.exports=FlightRepository;
