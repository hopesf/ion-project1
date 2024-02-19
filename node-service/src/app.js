import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
connectDB();

//helpers
import connectDB from "./helpers/db.js";

//routes
import mainRoute from "./routes/index.js";

// mqtt
import "./controllers/mqtt/index.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", mainRoute);

const httpServer = createServer(app);
export const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  // ...
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(2000, () => {
  console.log("Server is running on port 2000");
});

//! notification için websocket kullanılacak ve angular ile yapmış olduğumuz frontend kısmında ise bildirim geldiğinde veritabanından tekrar veri çekerek güncel veriler gösterilecek.
