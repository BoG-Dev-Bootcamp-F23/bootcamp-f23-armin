import createTicket from "../../../server/mongodb/actions/createTicket.js";
import mongoose from "mongoose";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const userID = new mongoose.Types.ObjectId(req.body.userID);
        try {
            await createTicket({ ...req.body, userID });
            res.status(200).send("Success");
        } catch (e) {
            res.status(500).send("Failed");
        }
    }
}