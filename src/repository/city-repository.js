const {City}=require('../models/index');

class cityRepository{
    async createCity({name}){ // destructing input object and getting name out of that 
       try {
        const city=await City.create({name});
        return city;
       } catch (error) {
        throw {error};
       }
    }

    async updateCity(cityId,data){ // destructing input object and getting name out of that 
       try {
        // const city=await City.update(data,
        //  {
        //     where:{
        //         id:cityId
        //     }
        //  }
        // );
        // return true;
       const city=await City.findByPk(cityId);
       city.name=data.name;
       await city.save();
    return city;
       } catch (error) {
        throw {error};
       }
    }

    async getCity(cityId){ 
       try {
        const city=await City.findByPk(cityId);
        return city;
       } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw {error};
       }
    }

    async deleteCity(cityId){
       try {
        await City.destroy({
            where:{
                id:cityId
            }
        });
        return true;
       } catch (error) {
        throw {error};
       }
    }

    async getAllCity()
    {
        try {
            const cities=await City.findAll();
            return cities;
        } catch (error) {
            throw {error}
        }
    }
}

module.exports=cityRepository;