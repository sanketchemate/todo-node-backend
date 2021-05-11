const mongoose =require('mongoose')

const connectDB = async() =>{
    const conn = await mongoose.connect("mongodb+srv://sanket:sanket123@wavetodo.ptesc.mongodb.net/wavetodo?retryWrites=true&w=majority",{
        useNewUrlParser:true, 
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true
    });


    console.log(`Connected..!!!!: ${conn.connection.host}`);
    
}

module.exports = connectDB;