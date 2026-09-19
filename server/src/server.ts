import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import contactRoutes from "../routes/contactRoutes.js";

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 3000);
const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:5173";

app.use(cors({ origin: frontendUrl }));
app.use(express.json());
app.use("/api", contactRoutes);

app.get("/health", (_req, res) => {
	res.json({ status: "ok" });
});

app.listen(port, () => {
	console.log(`Servidor ativo em http://localhost:${port}`);
});
