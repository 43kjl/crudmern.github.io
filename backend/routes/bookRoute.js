const router=require("express").Router();
const bookModel= require("../models/booksModel");

router.post("/add",async (req,res)=>{
    try{
        const data= req.body;
        const newBook=new bookModel(data);
        await newBook.save().then(()=>{
            res.status(200).json({message:"books added sucessfully" });
        });
    }catch(error){
        console.log(error);
    }

});

router.get("/getBook",async (req,res)=>{
    let books;
    try{
        books=await bookModel.find();
       
            res.status(200).json({books });
    }catch(error){
        console.log(error);
    }

});


router.get("/getBook/:id",async (req,res)=>{
    let book;
    const id=req.params.id;
    try{
        book=await bookModel.findById(id);
            res.status(200).json({book});
    }catch(error){
        console.log(error);
    }
});


router.put("/updateBook/:id",async (req,res)=>{
    let book;
    const id=req.params.id;
    const{bookname,description,author,image,price}=req.body;
    try{
        book=await bookModel.findByIdAndUpdate(id,{
            bookname,
            description,
            author,
            image,
            price,
        });
            res.status(200).json({message:"data updated sucessfully"});
    }catch(error){
        console.log(error);
    }
});


router.delete("/deleteBook/:id",async (req,res)=>{
    let book;
    const id=req.params.id;
    try{
        book=await bookModel.findByIdAndDelete(id);
            res.status(200).json({message:"deleted sucessfully"});
    }catch(error){
        console.log(error);
    }
});

module.exports = router;