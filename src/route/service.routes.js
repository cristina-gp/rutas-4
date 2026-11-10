import express from "express";
import { createServiceController } from "../controller/service.controller.js";

const router = express.Router();

router.post("/", createServiceController);


export default router;