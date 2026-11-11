import express from "express";
import cors from "cors";
import eventRoutes from "./routes/event-routes.js";

const app = express();

app.use(cors());
app.use(express.json()); // body -> req.body

// 1. Health-check endpoint'i (diğer route'lardan önce eklenir)
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    time: new Date().toISOString(),
    student: "2416501004" // Öğrenci numaran
  });
});

// 2. Etkinlik Rotaları
app.use("/events", eventRoutes);

// 3. Eşleşmeyen rotalar için 404 Yakalayıcı
app.use((req, res) => {
  res.status(404).json({ error: { message: "Route not found" } });
});

export default app;