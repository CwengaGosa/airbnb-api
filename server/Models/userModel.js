import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: "string", 
            required: true,
        },
        lastName: {
            type: "string", 
            required: true,
        },
        email: {
            type: "string", 
            required: true,
            unique: true,
        },
        password: {
            type: "string", 
            required: true,
        },
    },
    {timestamp: true}
);


userSchema.pre("save", async function (next){
    // is password modified
    if(!this.isModified("password")){
        next()
    }
    // hashing(cleaning) the password
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// check user logged in
userSchema.methods.matchPassword = async function (eneteredPassword){
    return await bcrypt.compare(eneteredPassword, this.password)
}

const User = mongoose.model("User", userSchema)

export default User;