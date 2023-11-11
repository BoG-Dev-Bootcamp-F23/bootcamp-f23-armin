import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";

export default async function transferTicket(req, res) {
    if (req.method !== 'PATCH') {
        return res.status(405).send('Method Not Allowed');
    }

    try {
        await updateTicketByUser(req.body);
    } catch (e) {
        console.error('Error in transferTicket:', e);
        const message = e && e.message ? e.message : "Internal server error";
        return res.status(500).send(message);
    }
    return res.status(200).send("Success");
}
