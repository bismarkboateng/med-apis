import express from "express"
import cors from "cors"
import patientRoutes from "./routes/routes.patients"
import "dotenv/config"

const app = express()

app.use(express.json())
const corsOptions = {
    origin: ["http://localhost:3000", "https://med-tau.vercel.app"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
    credentials: true,
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

app.use("/api/consultations", patientRoutes)

app.get("/", (request, response) => {
    return response.status(200).send("OK")
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})