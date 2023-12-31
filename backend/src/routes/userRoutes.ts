import Router from "express";
import { verifyToken } from "../middleware/tokenVerify";
import { checkUserDetails, loginUser, registerUser } from "../controllers/usersControllers";
import { getAllUsers } from "../controllers/projectControllers";


const user_router = Router();




user_router.get("/", verifyToken, getAllUsers);
user_router.post("/register", registerUser);
user_router.post("/login", loginUser);
user_router.get("/check_user_details", verifyToken, checkUserDetails);



export default user_router;
