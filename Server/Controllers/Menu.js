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

function getMenu(req, res) {
	Menu.find()
		.sort({ order: 'asc' })
		.exec((err, menuStored) => {
			if (err) {
				res.status(500).send({ message: 'Error del servidor' });
			} else {
				if (!menuStored) {
					res.status(404).send({ message: 'No hay elementos en el Menu' });
				} else {
					res.status(200).send({ menu: menuStored });
				}
			}
		});
}

function updateMenu(req, res) {
	let menuData = req.body;
	const params = req.params;

	Menu.findByIdAndUpdate(params.id, menuData, (err, menuUpdate) => {
		if (err) {
			res.status(500).send({ message: 'Error del servidor' });
		} else {
			if (!menuUpdate) {
				res.status(404).send({ message: 'No se encontro el menu' });
			} else {
				res.status(200).send({ message: 'Menu actualizado' });
			}
		}
	});
}

function activateMenu(req, res) {
	const { id } = req.params;
	const { active } = req.body;

	Menu.findByIdAndUpdate(id, { active }, (err, menuStored) => {
		if (err) {
			res.status(500).send({ message: 'Error del Servidor' });
		} else {
			if (!menuStored) {
				res.status(404).send({ message: 'No se encontro el menu' });
			} else {
				if (active === true) {
					res.status(200).send({ message: 'Menu Activado' });
				} else {
					res.status(200).send({ message: 'Menu Desactivado' });
				}
			}
		}
	});
}

function deleteMenu(req, res) {
	const { id } = req.params;

	Menu.findByIdAndRemove(id, (err, menuDelete) => {
		if (err) {
			res.status(500).send({ message: 'Error del Servidor' });
		} else {
			if (!menuDelete) {
				res.status(404).send({ message: 'No se encontro el menu' });
			} else {
				res.status(200).send({ message: 'Menu eliminado' });
			}
		}
	});
}

module.exports = {
	addMenu,
	getMenu,
	updateMenu,
	activateMenu,
	deleteMenu,
};
