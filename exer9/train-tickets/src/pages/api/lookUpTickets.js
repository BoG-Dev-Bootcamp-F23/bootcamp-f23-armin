import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser";

export default async function lookUpTickets(req, res) {
    if (req.method === "GET") {
        try {
            const response = await readTicketsByUser(req.query)
            return res.status(200).json(response)
        } catch (e) {
            res.status(500).send("Failed");
        }
    }
}
