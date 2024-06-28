import express from "express";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: "rzp_test_QBvgZkqsH8vLIs" })
);

export default app;
