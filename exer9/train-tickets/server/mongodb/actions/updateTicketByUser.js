import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import mongoose from "mongoose";

export default async function updateTicketByUser(data) {

    try {
        await connectDB()
        const { ticketId, userId } = data
        await Ticket.findByIdAndUpdate(ticketId, { userId })


        //return { success: true };
    } catch (e) {
        console.error('Error in updateTicketByUser:', e);
        throw new Error(`Unable to update ticket. ${e.message}`);
    }
}
