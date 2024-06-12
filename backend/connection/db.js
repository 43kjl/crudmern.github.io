const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://kaajaalsingh123:uiop@cluster0.odun5uu.mongodb.net/CRUD?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("connected"));

