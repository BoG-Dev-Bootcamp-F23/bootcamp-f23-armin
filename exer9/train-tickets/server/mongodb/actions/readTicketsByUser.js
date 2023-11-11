import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import mongoose from "mongoose";

export default async function readTicketsByUser(data) {
    try {
        await connectDB();
        const { ticketid } = data;

        if (!mongoose.isValidObjectId(ticketid)) {
            throw new Error("Invalid ticket ID format");
        }

        const id = new mongoose.Types.ObjectId(ticketid);
        return await Ticket.find({ userId: id });
    } catch (error) {
        console.error(error);
        return { success: false, error: error.message };
    }
}