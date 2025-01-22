const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


//routes
app.get("/",(req,res)=>{
    res.json("Wellcome! to the Add api");
});

app.get("/add", (req,res)=>{
    const { first=0, second=0}=req.query
    const sum=parseInt(first) + parseInt(second);
    //print message for non number query inputs
    if(isNaN(sum)){
        return res.status(400).send({
            success: false,
            message: "Invalid numbers provided"
        });
    }
    res.status(200).send({
        success: true,
        sum
    });
});

//Callback function for listening to the post
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//exporting the app without starting the server
module.exports = app;