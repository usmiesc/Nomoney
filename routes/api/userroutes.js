const router= require("express").Router()

const{
getalluser,getuser,createuser,updateuser,Deleteuser
}=require("../../controller/usercontroller")
router.route("/").get(getalluser).post(createuser)
router.route("/:userID").get(getuser).put(updateuser).delete(Deleteuser)

