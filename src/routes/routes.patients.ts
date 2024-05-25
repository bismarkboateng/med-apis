import { Router } from "express";
import { createConsultation, getAConsultation, getAllConsultations } from "../controllers/controllers.patients";

const router = Router()

router.post("/create", createConsultation)
router.get("/all", getAllConsultations)
router.get("/:id/patient", getAConsultation)

export default router