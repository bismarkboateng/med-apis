"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_patients_1 = require("../controllers/controllers.patients");
const router = (0, express_1.Router)();
router.post("/create", controllers_patients_1.createConsultation);
router.get("/all", controllers_patients_1.getAllConsultations);
router.get("/:id/patient", controllers_patients_1.getAConsultation);
router.get("/search", controllers_patients_1.searchConsultation);
router.get("/patient/search", controllers_patients_1.patientSearch);
exports.default = router;
