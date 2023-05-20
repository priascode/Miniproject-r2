require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const router= require("./routes/book-routes");

const http = require("http");
const {Server} = require('socket.io');
const server = http.createServer(app);

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());


// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/books", router);

const io = new Server(server, {
    cors: {
        origin:"http://localhost:3000",
        methods:["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(`User with ID:${socket.id} joined room: ${data}`);

    });


    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);

    });
    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });

});







const port = process.env.PORT || 8080;
server.listen(port, console.log(`Listening on port ${port}...`));
