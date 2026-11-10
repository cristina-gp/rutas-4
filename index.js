import "dotenv/config"; 
import express from "express"; 
import userRouter from "./src/route/user.routes.js";
import productRouter from "./src/route/producto.routes.js";
import serviceRouter from "./src/route/service.routes.js";

const api = express();
const port = process.env.PORT || 3000; 
api.use(express.json());

api.use("/user", userRouter);

api.use("/productos", productRouter);

api.use("/servicios", serviceRouter);





api.listen(port, () => {
  console.log("http://localhost:" + port);
});



