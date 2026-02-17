import express from "express";
import cors from "cors";
import uploadRoutes from './routes/upload.route.js';

const app = express();

app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());

// Routes
app.use("/api", uploadRoutes);

export default app;