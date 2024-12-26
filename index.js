require("dotenv").config();
const express = require("express");
const router = require("./Routes/AuthRouter");
const App = express();
const PORT = 5000;
const URI = process.env.MONGO
const mongose = require("mongoose")


App.use(express.json())
App.use('/', router)


mongose.connect(URI).then(() => {
    console.log('mongodb is connected');
    App.listen(PORT, () => {
        console.log(`Server is running on this port ${PORT}`);
    })
}).catch((er) => {
    console.log(er);
})