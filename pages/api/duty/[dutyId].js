const axios = require('axios');

import { dutyURL } from '../../../Global/constants/url';

export default async function getDuty(req, res) {
	const query = req.query;

	const data = await axios.get(dutyURL);

	res.status(200).json({ dutyId: `${query.dutyId}` });
}
