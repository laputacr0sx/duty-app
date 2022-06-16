const axios = require('axios');

import { dutyURL } from '../../../Global/constants/url';

export default async function getDuty(req, res) {
	const query = req.query;

	const data = await axios.get(dutyURL);
	const arr = Array.from(data);

	console.log(arr);

	res.status(200).json({ dutyId: `${query.dutyId}` });
}
