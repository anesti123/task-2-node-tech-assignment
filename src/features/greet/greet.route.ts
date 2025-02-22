import express from "express";
import { greetController } from "./greet.controller";

const router = express.Router();

router.get("/greet", greetController);

export default router;
