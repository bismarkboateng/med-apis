import { Schema, model, models } from "mongoose";


const PatientSchema = new Schema({
    personal_information: {
        fullName: { type: String, required: true },
        gender: { type: String, required: true },
        dob: { type: Date, required: true },
        phoneNumber: { type: String, required: true },
        address: { type: String, required: true },
        email: { type: String, required: false },
    },

    date: { type: String, required: true },

    consultation_type: { type: String, required: true },

    healthcare_provider: { type: String, required: true },
    
    medical_history: {
        past_medical_conditions: { type: String, required: false },
        current_medications: { type: String, required: false },
        allergies: { type: String, required: false },
    },

    patient_problem: {
        medical_condition: { type: String, required: false },
        duration_of_symptoms: { type: String, required: true },
        nature_of_symptoms: { type: String, required: true },
    },
    
    lifestyle: {
        sleep_patterns: { type: String, required: true },
    }
});

const Patient = models.Patient || model("Patient", PatientSchema);
export default Patient;
