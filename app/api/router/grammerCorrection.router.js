import express from "express";
const router = express.Router();

import controller from "../controller/grammerCorrection.controller";

router.post("/", controller.correction);

export default router;
