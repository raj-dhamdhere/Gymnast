import express from "express";
const router = express.Router();


import { register,loginUser } from "../controller/user.js";
import { vehicle} from "../controller/vehicle.js";
import { summary} from "../controller/summary.js";
import { drowsy} from "../controller/drowsy.js";
import { startmaps} from "../controller/startmaps.js";
import { MAGMaster} from "../controller/MAGMaster.js";
import { WAGMaster} from "../controller/WAGMaster.js";
import { MAGMasterConsole} from "../controller/MAGConsolidated.js";
import { WAGMasterConsole} from "../controller/WAGConsolidated.js";

/* USER MANAGEMENT */
router.post("/api/registerUser", register);

/* MAG MASTER Insert */
router.post("/api/MAGMaster", MAGMaster);

/* WAG MASTER  Insert */
router.post("/api/WAGMaster", WAGMaster);

/* MAG MASTER Consolidated */
router.post("/api/MAGMasterConsolidated", MAGMasterConsole);

/* WAG MASTER Consolidated */
router.post("/api/WAGMasterConsolidated", WAGMasterConsole);


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
