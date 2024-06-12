const express=require("express");
const app= express();
require("./connection/db");
const cors= require("cors");

const bookRoute=require("./routes/bookRoute");
app.use(cors());
app.use(express.json());
app.use("/api/v1",bookRoute);

app.listen(3000,(req,res)=>{
console.log("server running at port 3000")
});