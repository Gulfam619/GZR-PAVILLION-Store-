import mongoose,{ Schema } from "mongoose";

mongoose.connect("mongodb://localhost:27017")
mongoose.Promise = global.Promise;

const userSchema = new Schema({
 name: String,
 email: String,
 password: String,
 },
 {
    timestamps: true,
 })

 const User = mongoose.models.User || mongoose.model("User",userSchema);

 export default User;