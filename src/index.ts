import express from "express"
import cors from "cors"
import patientRoutes from "./routes/routes.patients"
import "dotenv/config"

const app = express()

app.use(express.json())
const corsOptions = {
    origin: ["https://med-phi.vercel.app"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
    credentials: true,
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

app.use("/api/consultations", patientRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})