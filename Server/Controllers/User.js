const bcrypt = require('bcrypt-nodejs');
const jwt = require('../Services/jwt');
const User = require('../Models/User');

function signUp(req, res) {
	const user = new User();
	const { name, lastname, email, password, repeatPassword } = req.body;
	user.name = name;
	user.lastname = lastname;
	user.email = email.toLowerCase();
	user.role = 'admin';
	user.active = false;

	if (!password || !repeatPassword) {
		res.status(404).send({ message: 'Las contraseñas son obligatorias' });
	} else {
		if (password !== repeatPassword) {
			res.status(404).send({ message: 'Las contraseñas no son iguales' });
		} else {
			bcrypt.hash(password, null, null, function (err, hash) {
				if (err) {
					res.status(500).send({
						message: 'Error al encriptar la contraseña',
					});
				} else {
					user.password = hash;
					user.save((err, userStored) => {
						if (err) {
							res.status(500).send({ message: 'El usuario ya existe' });
						} else {
							if (!userStored) {
								res.status(404).send({
									message: 'Error al crear el usuario',
								});
							} else {
								// res.status(200).send({ userStored });
								res.status(200).send({ user: userStored });
							}
						}
					});
				}
			});
		}
	}
}

function signIn(req, res) {
	const params = req.body;
	const email = params.email.toLowerCase();
	const password = params.password;

	User.findOne({ email }, (err, userStored) => {
		if (err) {
			res.status(500).send({ message: 'Error en el servisor' });
		} else {
			if (!userStored) {
				res.status(400).send({ message: 'Usuario no encontrado' });
			} else {
				bcrypt.compare(password, userStored.password, (err, check) => {
					if (err) {
						res.status(500).send({ message: 'Error en el servidor' });
					} else {
						if (!userStored.active) {
							res.status(200).send({
								code: 200,
								message: 'El usuario no esta activo',
							});
						} else {
							res.status(200).send({
								accessToken: jwt.createAccesstoken(userStored),
								refreshToken: jwt.createRefreshToken(userStored),
							});
						}
					}
				});
			}
		}
	});
}

module.exports = { signUp, signIn };
