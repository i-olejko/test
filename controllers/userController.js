const userController = {};

userController.post = (req,res)=>{
    const { username, password } = req.body;

    //validation 
    res.status(200).json({
        success: true,
        data: {msg: "well done."}
    });
};
export default userController;