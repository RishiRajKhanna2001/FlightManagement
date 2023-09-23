const {FlightService}=require('../services/index')
const {SuccessCodes}=require('../utils/error-codes')

const flightService=new FlightService();
const create=async (req,res)=>{
      try {
        const FlightRequestData={
          flightNumber:req.body.flightNumber,
          airplaneId:req.body.airplaneId,
          departureAirportId:req.body.departureAirportId,
          arrivalAirportId:req.body.arrivalAirportId,
          arrivalTime:req.body.arrivalTime,
          departureTime:req.body.departureTime,
          price:req.body.price,
        }

        const flight=await flightService.createFlight(FlightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: 'successfully created a flight',
            err: {}
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
      }
}

const getFlight=async (req,res)=>{
      try {
        const flight=await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: 'successfully get a flight',
            err: {}
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get a flight',
            err: error
        });
      }
}
 
const getAllFlights=async (req,res)=>{
      try {
        const flight=await flightService.getAllFlight(req.query);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: 'successfully filtered out flights',
            err: {}
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to filter flight',
            err: error
        });
      }
}
 
module.exports={
    create,
    getFlight,
    getAllFlights
}