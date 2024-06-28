import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";
import app from './app.js';

// Connect to the database
connectDB();

const instance = new Razorpay({
  key_id: "rzp_test_QBvgZkqsH8vLIs",
  key_secret: "Mtp1weWbXu6vqyvyLAJvKos3",
});

app.listen(process.env.PORT || 4000, () =>
  console.log(`Server is working on port ${process.env.PORT || 4000}`)
);

export { instance };
