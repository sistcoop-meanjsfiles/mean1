'use strict';

// Configuring the Articles module
angular.module('mean.persona').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Persona', 'persona/app', 'item');
	}
]);
