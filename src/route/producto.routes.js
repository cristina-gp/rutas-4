import express from "express";
import { createProductController, getProductsController, getProductByIdController } from "../controller/product.controller.js";

const router = express.Router();

router.post("/", createProductController);
router.get("/", getProductsController);
router.get("/:id", getProductByIdController);



export default router;