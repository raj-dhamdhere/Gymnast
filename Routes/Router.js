import express from "express";
const router = express.Router();


import { register,loginUser } from "../controller/user.js";
import { vehicle} from "../controller/vehicle.js";
import { summary} from "../controller/summary.js";
import { drowsy} from "../controller/drowsy.js";
import { startmaps} from "../controller/startmaps.js";
import { MAGMaster} from "../controller/MAGMaster.js";
import { WAGMaster} from "../controller/WAGMaster.js";

/* USER MANAGEMENT */
router.post("/api/registerUser", register);

/* MAG MASTER */
router.post("/api/MAGMaster", MAGMaster);

/* WAG MASTER */
router.post("/api/WAGMaster", WAGMaster);

/* Vehicle Expenditure */
router.post("/api/vehicleexpense", vehicle);

/* Summary Get APi */
router.get("/api/Summary", summary);

/* Drowsy Detect */
router.post("/api/drowsy", drowsy);

/*Login User */
router.post("/api/loginUser", loginUser);

router.post("/api/StartMaps",startmaps)


export default router;
