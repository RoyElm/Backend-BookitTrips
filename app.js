global.config = require(process.env.NODE_ENV === "production" ? "./config-prod.json" : "./config-dev.json");
const express = require("express");
const authController = require("./controllers-layer/auth-controller");
const bookingController = require("./controllers-layer/booking-controller");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const socketHelper = require("./helpers/socket-helper");
const path = require("path");

const server = express();

// Enable sending an receiving cookies from the front:
server.use(cookieParser());

server.use(cors())
server.use(express.json());
server.use(fileUpload());
server.use(express.static(path.join(__dirname, "./frontend")));

server.use("/api/auth", authController);
server.use("/api/vacations", bookingController);

server.use("*", (request, response) => {
    response.sendFile(path.join(__dirname, "./frontend/index.html"))
});

const port = process.env.PORT || 3001;
const expressListener = server.listen(port, () => console.log("Listening...."));
socketHelper.init(expressListener);


