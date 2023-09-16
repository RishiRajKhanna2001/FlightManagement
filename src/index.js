const express=require('express'); 
const cityRepository=require('./repository/city-repository')

const bodyParser=require('body-parser');

const {City}=require('./models/index');
const {Airport}=require('./models/index')

const db=require('./models/index')
// const sequelize=require('sequelize')

const {PORT}=require('./config/serverConfig')
const ApiRoutes=require('./routes/index')

const setupAndStartServer=async ()=>{
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT,async()=>{
        console.log(`server started on port ${PORT}`);
        db.sequelize.sync({alter:true});
    })
}

setupAndStartServer();
