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
import { magmasterget} from "../Controller/MAGMasterget.js";
import { wagmasterget} from "../Controller/WAGMastergett.js";
import { magmastergetconsole} from "../Controller/MAGMastergetconsole.js";
import { wagmastergetconsole} from "../Controller/WAGMastergetconsole.js";

/* USER MANAGEMENT */
router.post("/api/registerUser", register);

/* MAG MASTER Insert */
router.post("/api/MAGMaster", MAGMaster);

/* WAG MASTER  Insert */
router.post("/api/WAGMaster", WAGMaster);

/* MAG MASTER Consolidated insert*/
router.post("/api/MAGMasterConsolidated", MAGMasterConsole);

/* WAG MASTER Consolidated insert*/
router.post("/api/WAGMasterConsolidated", WAGMasterConsole);

/* MAG MASTER Get APi */
router.get("/api/MAGMasterget", magmasterget);

/* WAG MASTER Get APi */
router.get("/api/WAGMasterget", wagmasterget);

/* MAG MASTER Get Consolidated */
router.get("/api/MAGMasterGetConsolidated", magmastergetconsole);

/* WAG MASTER Get Consolidated */
router.get("/api/WAGMasterGetConsolidated", wagmastergetconsole);

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
