const bcrypt = require('bcrypt-nodejs')
const User = require('../Models/User')

function signUp (req, res) {
	const user = new User()
	const {email, password, repeatPassword} = req.body;
	user.email = email
	user.role = 'admin'
	user.active = false

	if(!password || !repeatPassword) {
		res.status(404).send({message: 'Las contraseñas son obligatorias'})
	} else {
		if(password !== repeatPassword) {
			res.status(404).send({message: 'Las contraseñas no son iguales'})
		} else {
			bcrypt.hash(password, null, null, function(error, hash) {
				
			})
			res.status(200).send({message: 'Todo OK'})
		}
	}
}

module.exports = {signUp}