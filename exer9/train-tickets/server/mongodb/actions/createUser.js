import connectDB from '../index';
import User from "../models/User.js";

async function createUser(props) {
    try {
        await connectDB();

        const newUser = new User(props);
        await newUser.save();

        //return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, error };
    }
}

export default createUser;
