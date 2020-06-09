const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.port || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require('./config');

mongoose.connect(
	`mongodb://${IP_SERVER}:${PORT_DB}/backend`,
	{ useNewUrlParser: true },
	(err, res) => {
		if (err) {
			throw err;
		} else {
			console.log('La conexion a la base de datos es correcta.');

			app.listen(port, () => {
				console.log('##################');
				console.log('#### API REST ####');
				console.log('##################');
				console.log(`http://${IP_SERVER}:${PORT_DB}/api/${API_VERSION}/`);
			});
		}
	}
);
