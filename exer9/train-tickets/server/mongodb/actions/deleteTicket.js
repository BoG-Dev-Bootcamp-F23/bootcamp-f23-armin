import connectDB from '../index';
import Ticket from "../models/Ticket.js";

async function deleteTicket(ticketId) {
    try {
        await connectDB();

        const { ticketid } = ticketId;
        await Ticket.findByIdAndDelete(ticketid);
    } catch (error) {
        console.error(error);
        return { success: false, error };
    }
}

export default deleteTicket;
