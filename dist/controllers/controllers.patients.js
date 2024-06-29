"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientSearch = exports.searchConsultation = exports.createConsultation = exports.getAConsultation = exports.getAllConsultations = void 0;
const database_1 = require("../database");
const patient_models_1 = __importDefault(require("../database/models/patient.models"));
const getAllConsultations = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, database_1.connectToDatabase)();
        const consultations = yield patient_models_1.default.find().exec();
        if (!consultations) {
            return response.status(404).send({
                message: "No consultations"
            });
        }
        return response.status(200).send(consultations);
    }
    catch (error) {
        throw error;
    }
});
exports.getAllConsultations = getAllConsultations;
const getAConsultation = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        yield (0, database_1.connectToDatabase)();
        const consultation = yield patient_models_1.default.findById(id);
        if (!consultation) {
            return response.status(404).send({
                message: "Could not find consultation"
            });
        }
        return response.status(200).send(consultation);
    }
    catch (error) {
        throw error;
    }
});
exports.getAConsultation = getAConsultation;
const createConsultation = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const data = request.body;
    try {
        yield (0, database_1.connectToDatabase)();
        const newConsultation = yield patient_models_1.default.create(data);
        if (!newConsultation) {
            return response.status(500).send({
                message: "Could not create a consultation!"
            });
        }
        return response.status(200).send(newConsultation);
    }
    catch (error) {
        throw error;
    }
});
exports.createConsultation = createConsultation;
const searchConsultation = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, patientName, healthcare_provider, consultation_type, medical_condition } = request.query;
    try {
        yield (0, database_1.connectToDatabase)();
        const consultations = yield patient_models_1.default.find({
            "$or": [
                { "personal_information.fullName": { $regex: new RegExp(patientName, "i") } },
                { consultation_type: { $regex: new RegExp(consultation_type, "i") } },
                { healthcare_provider: { $regex: new RegExp(healthcare_provider, "i") } },
                { "patient_problem.medical_condition": { $regex: new RegExp(medical_condition, "i") } },
                { date: { $regex: new RegExp(date, "i") } }
            ]
        });
        if (!consultations) {
            return response.status(404).send({ message: "Search not found" });
        }
        return response.status(200).send(consultations);
    }
    catch (error) {
        throw error;
    }
});
exports.searchConsultation = searchConsultation;
const patientSearch = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { patientName } = request.query;
    try {
        yield (0, database_1.connectToDatabase)();
        const consultations = yield patient_models_1.default.find({
            "$or": [
                { "personal_information.fullName": { $regex: new RegExp(patientName, "i") } },
            ]
        });
        if (!consultations) {
            return response.status(404).send({ message: "Search not found" });
        }
        return response.status(200).send(consultations);
    }
    catch (error) {
        throw error;
    }
});
exports.patientSearch = patientSearch;
