import express from "express";
import {
  checkResetToken,
  deleteUser,
  forgotPassword,
  getUser,
  getUsers,
  resetPassword,
  signout,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);
router.get("/getusers", verifyToken, getUsers);
router.get("/:userId", getUser);
router.post("/forgotpassword", forgotPassword);
router.get("/resetsession/:token", checkResetToken);
router.post("/resetpassword", resetPassword);

export default router;
