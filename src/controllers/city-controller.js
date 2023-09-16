const {CityService}=require('../services/index')

const cityService=new CityService();

const create=async (req,res)=>{
    try {
        const city=await cityService.createCity(req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:"city created successfully",
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

const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await cityService.getAllCities();
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        });
    }
}

const update=async (req,res)=>{
try {
         const response=await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"city updated successfully",
            err:{}
        })
    } catch (error) {
        console.log("err in controller layer")
        return res.status(500).json({
            data:{},
            success:false,
            message:"error occured",
            err:error
        })
    }
}

const destroy =async (req,res)=>{
try {
         const city=await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:"city deleted successfully",
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

module.exports={
    create,
    get,
    getAll,
    update,
    destroy
}
