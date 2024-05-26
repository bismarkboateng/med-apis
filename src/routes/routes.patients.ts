import { Router } from "express";
import {
    createConsultation, getAConsultation,
    getAllConsultations,
    searchConsultation, patientSearch
} from "../controllers/controllers.patients";

const router = Router()

router.post("/create", createConsultation)
router.get("/all", getAllConsultations)
router.get("/:id/patient", getAConsultation)
router.get("/search", searchConsultation)
router.get("/patient/search", patientSearch)


export default router