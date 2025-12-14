import mongoose from "mongoose";

const uri =
    "mongodb+srv://omar1beats1jobs1_db_user:Test1234@example.0zpvbu4.mongodb.net/Example?retryWrites=true&w=majority";

mongoose
    .connect(uri)
    .then(() => console.log("✅ Mongoose connected successfully"))
    .catch((err) => console.error("❌ Error in connection:", err));

export default mongoose;
