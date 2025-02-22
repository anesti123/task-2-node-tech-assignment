import express from "express";
import greetRoutes from "./features/greet/greet.route";

const app = express();

app.use(express.json()); 
app.use(greetRoutes);  

export default app;
