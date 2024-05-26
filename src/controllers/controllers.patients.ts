import { Request, Response } from "express";
import { connectToDatabase } from "../database";
import Patient from "../database/models/patient.models";

export const getAllConsultations = async (request: Request, response: Response) => {
    
    try {
        await connectToDatabase()
        const consultations = await Patient.find().exec()

        if (!consultations) {
            return response.status(404).send({
                message: "No consultations"
            })
        }

        return response.status(200).send(consultations)
    } catch (error) {
        throw error
    }
}

export const getAConsultation = async (request: Request, response: Response) => {
    const { id } = request.params 
    try {
        await connectToDatabase()
        const consultation = await Patient.findById(id)

        if (!consultation) {
            return response.status(404).send({
                message: "Could not find consultation"
            })
        }

        return response.status(200).send(consultation)
    } catch (error) {
        throw error
    }
}

export const createConsultation = async (request: Request, response: Response) => {
    const data = request.body
    
    try {
        await connectToDatabase()
        const newConsultation = await Patient.create(data)

        if (!newConsultation) {
            return response.status(500).send({
                message: "Could not create a consultation!"
            })
        }

        return response.status(200).send(newConsultation)
    } catch (error) {
        throw error
    }
}

export const searchConsultation = async (request: Request, response: Response) => {
    const { date, patientName, healthcare_provider, consultation_type, medical_condition } = request.query

    try {
        await connectToDatabase()
        const consultations = await Patient.find({
            "$or": [
                { "personal_information.fullName": { $regex: new RegExp(patientName as string, "i") } },
                { consultation_type: { $regex: new RegExp(consultation_type as string, "i") } },
                { healthcare_provider: { $regex: new RegExp(healthcare_provider as string, "i") } },
                { "patient_problem.medical_condition": { $regex: new RegExp(medical_condition as string, "i") } },
                { date: { $regex: new RegExp(date as string, "i") } }
            ]
        })
        if(!consultations) {
            return response.status(404).send({ message: "Search not found" })
        }
        return response.status(200).send(consultations)
    } catch (error) {
        throw error
    }
}

export const patientSearch = async (request: Request, response: Response) => {
    const { patientName } = request.query

    try {
        await connectToDatabase()
        const consultations = await Patient.find({
            "$or": [
                { "personal_information.fullName": { $regex: new RegExp(patientName as string, "i") } },
            ]
        })
        if(!consultations) {
            return response.status(404).send({ message: "Search not found" })
        }
        return response.status(200).send(consultations)
    } catch (error) {
        throw error
    }
}
