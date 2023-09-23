// const { response } = require('express');
const {AirportService}=require('../services/index')

const airportService=new AirportService();

const create=async (req,res)=>{
    try {
        const response=await airportService.create(req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"airport created successfully",
            err:""
        })
    } catch (error) {
        console.log("err in controller layer")
        return res.status(500).json({
            data:[],
            success:false,
            message:"error occured",
            err:error
        })
    }
}

// const get = async (req, res) => {
//     try {
//         const response = await airportService.get(req.params.id);
//         return res.status(200).json({
//             data: response,
//             success: true,
//             message: 'Successfully fetched a airport',
//             err: {}
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             data: {},
//             success: false,
//             message: 'Not able to get the airport',
//             err: error
//         });
//     }
// }

// const getAll = async (req, res) => {
//     try {
//         const response = await airportService.getAll(req.query);
//         return res.status(200).json({
//             data: response,
//             success: true,
//             message: 'Successfully fetched a airport',
//             err: {}
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             data: {},
//             success: false,
//             message: 'Not able to get the city',
//             err: error
//         });
//     }
// }

// const update=async (req,res)=>{
// try {
//          const response=await airportService.update(req.params.id,req.body);
//         return res.status(200).json({
//             data:response,
//             success:true,
//             message:"airport updated successfully",
//             err:{}
//         })
//     } catch (error) {
//         console.log("err in controller layer")
//         return res.status(500).json({
//             data:{},
//             success:false,
//             message:"error occured",
//             err:error
//         })
//     }
// }

// const destroy =async (req,res)=>{
// try {
//          const response=await cityService.destroy(req.params.id);
//         return res.status(200).json({
//             data:response,
//             success:true,
//             message:"airport deleted successfully",
//             err:""
//         })
//     } catch (error) {
//         console.log("err in controller layer")
//         return res.status(500).json({
//             data:[],
//             success:false,
//             message:"error occured",
//             err:error
//         })
    // }
// }

module.exports={
    create,
    // get,
    // getAll,
    // update,
    // destroy
}
