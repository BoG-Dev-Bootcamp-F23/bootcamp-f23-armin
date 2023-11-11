import connectDB from '../index';
import Ticket from "../models/Ticket.js";

async function createTicket(props) {
    try {
        await connectDB();

        const newTicket = new Ticket(props);
        await newTicket.save();

        //return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, error };
    }
}

export default createTicket;
