import { Schema, model, models } from "mongoose";


const PatientSchema = new Schema({
    personal_information: {
        fullName: { type: String, required: true },
        gender: { type: String, required: true },
        dob: { type: Date, required: true },
        phoneNumber: { type: String, required: true },
        address: { type: String, required: false },
        email: { type: String, required: false, unique: true },
        emergency_contact: {
            name: { type: String, required: false },
            phoneNumber: { type: String, required: false },
        },
    },
    medical_history: {
        past_medical_conditions: { type: String, required: false },
        current_medications: { type: String, required: false },
        allergies: { type: String, required: false },
        family_medical_history: { type: String, required: false },
        immunization_records: { type: String, required: false },
    },
    patient_problem: {
        primary_complaint: { type: String, required: false },
        duration_of_symptoms: { type: String, required: true },
        nature_of_symptoms: { type: String, required: true },
        previous_consultations: { type: String, required: false },
    },
    lifestyle: {
        diet_and_nutrition: { type: String, required: false },
        physical_activity: { type: String, required: false },
        sleep_patterns: { type: String, required: true },
        substance_use: { type: String, required: false },
    },
    social_and_occupational_history: {
        occupation_and_work_environment: { type: String, required: false },
        living_situation: { type: String, required: false },
        social_support: { type: String, required: false },
        travel_history: { type: String, required: false },
    },
    insurance_and_financial_information: {
        insurance_provider_details: { type: String, required: false },
        financial_concerns: { type: String, required: false },
    }
})

const Patient = models.Patient || model("Patient", PatientSchema)
export default Patient