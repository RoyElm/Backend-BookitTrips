const io = require("socket.io");

let socketServer;

function init(expressListener) {
    //Switching the url between Development and production.
    socketServer = io(expressListener, { cors: { origin: config.socketIoUrl} });
    socketServer.sockets.on("connection", socket => {
        console.log("Client Connected. Total clients: ", socketServer.engine.clientsCount);
        socket.on("disconnect", () => console.log("Client Disconnected. Total clients: ", socketServer.engine.clientsCount ? socketServer.engine.clientsCount - 1 : socketServer.engine.clientsCount));
    });
}

function vacationAdded(addedVacation) {
    socketServer.sockets.emit("msg-from-server-vacation-added", addedVacation);
}

function vacationUpdated(updatedVacation) {
    socketServer.sockets.emit("msg-from-server-vacation-updated", updatedVacation);
}

function vacationDeleted(vacationId) {
    socketServer.sockets.emit("msg-from-server-vacation-deleted", +vacationId);
}

module.exports = {
    init,
    vacationAdded,
    vacationUpdated,
    vacationDeleted
};
