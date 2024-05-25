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

