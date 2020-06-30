const Newsletter = require('../Models/Newsletter');

function suscribeEmail(req, res) {
	const email = req.params.email;
	const newsletter = new Newsletter();

	if (!email) {
		res.status(404).send({ code: 404, message: 'El email es obligatorio' });
	} else {
		newsletter.email = email.toLowerCase();
		newsletter.save((err, newsletterStored) => {
			if (err) {
				res.status(500).send({ code: 500, message: 'El correo ya existe' });
			} else {
				if (!newsletterStored) {
					res.status(400).send({
						code: 400,
						message: 'Error al registrar correo',
					});
				} else {
					res.status(200).send({ code: 200, message: 'Email registrado' });
				}
			}
		});
	}
}

module.exports = {
	suscribeEmail,
};
