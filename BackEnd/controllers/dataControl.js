import userModel from '../models/userModel.js'


// CREATE
export const createData = async (req, res) => {

  try {

    const add = await userModel.create(req.body)

    if(add){
        res.status(201).json({msg:"Successfully Added"})
    }else{

        res.status(404).json({msg:"Soemthing error"})
    }
    
    } 
    catch (error) {
     res.status(404).json({msg:"Soemthing error",error})
    }
};


//  find()
export const getData = async(req,res)=>{

    try {

        const getData = await userModel.find();
       
        if(getData){
            return res.status(200).json({myDatas:getData})
        }
        
    } catch (err) {
         res.status(404).json({msg:"Soemthing error",err})   
    }

}

