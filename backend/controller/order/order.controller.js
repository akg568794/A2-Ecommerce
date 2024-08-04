const orderModel=require("../../models/orderProductModel")

const orderController=async(request,response)=>{
    try{
        const currentUserId=request.userId;
        const orderList=await orderModel.find({userId:currentUserId}).sort({createdAt:-1});
        console.log(orderList);
        response.json({
            data:orderList,
            message:"order list",
            success:true
        })
    }
    catch(error){
        response.status(500).json(
            {
                message:error.message|| error,
                error:true
            }
        )
    }
}

module.exports=orderController;