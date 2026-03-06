const express = require('express');
const cors = require('cors');
const { getApiInfo } = require('./controllers/v1Controllers');

const app = express();
app.use(express.json());
app.use(cors({
	origin: "*",
	credentials: true,
}));

app.get("/", getApiInfo);

app.use('/v1', require("./routes/v1Routes"));

try {
	const port = process.env.PORT || 8080;
	app.listen(port, () => { console.log('[+] Server running on port ' + port) });
} catch (err) {
	console.log(`[-] Connection Failed: ${err.message}`);
}