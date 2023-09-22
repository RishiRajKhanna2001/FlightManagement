const {FlightService}=require('../services/index')

const flightService=new FlightService();
const create=async (req,res)=>{
      try {
        const flight=await flightService.createFlight(req.body);
        return res.status(200).json({
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
        return res.status(200).json({
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
        return res.status(200).json({
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