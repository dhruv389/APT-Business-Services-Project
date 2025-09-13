const Order = require("../models/Order");

const initOrderSocket = (io) => {
  Order.watch().on("change", (change) => {
    if (change.operationType === "insert" || change.operationType === "update" || change.operationType === "delete") {
      io.emit("orderUpdate", { type: change.operationType, data: change.fullDocument });
    }
  });
};

module.exports = initOrderSocket;
