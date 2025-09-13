const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://drcoder389:zMs8TugfzXVR1cRn@cluster0.po2um40.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ DB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

