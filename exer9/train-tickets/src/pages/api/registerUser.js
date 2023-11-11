import createUser from "../../../server/mongodb/actions/createUser.js";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(400).send("Failed.");
    }

    try {
        await createUser(req.body);
        res.status(200).send("Success");
    } catch (e) {
        res.status(500).send("Failed");
    }
}
