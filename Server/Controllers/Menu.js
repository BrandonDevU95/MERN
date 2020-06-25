const Menu = require('../Models/Menu');

function addMenu(req, res) {
	const { title, url, order, active } = req.body;
	const menu = new Menu();

	menu.title = title;
	menu.url = url;
	menu.order = order;
	menu.active = active;

	menu.save((err, createMenu) => {
		if (err) {
			res.status(500).send({ message: 'Error del servidor' });
		} else {
			if (!createMenu) {
				res.status(404).send({ message: 'Error al crear el menu' });
			} else {
				res.status(200).send({ message: 'Menu Creado' });
			}
		}
	});
}

module.exports = {
	addMenu,
};
