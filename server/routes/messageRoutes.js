
import express from "express";
import { protectRoute } from "../middleware/auth.js";
import { getUserForSidebar, markMessageAsSeen, sendMessage, getMessages } from "../controllers/messageController.js";


const messageRouter=express.Router();
messageRouter.get("/users",protectRoute,getUserForSidebar);
messageRouter.get("/:id",protectRoute,getMessages);
messageRouter.put("/mark/:id", protectRoute, markMessageAsSeen);
messageRouter.post("/send/:id",protectRoute,sendMessage);

export default messageRouter;