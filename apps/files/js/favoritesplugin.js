/*
 * Copyright (c) 2014 Vincent Petry <pvince81@owncloud.com>
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

(function(OCA) {
	/**
	 * @class OCA.Files.FavoritesPlugin
	 * @augments OCA.Files.FavoritesPlugin
	 *
	 * @classdesc Favorites plugin
	 * Registers the favorites file list and file actions.
	 */
	OCA.Files.FavoritesPlugin = {
		name: 'Favorites',

		attach: function(app) {

			// register favorite list for sidebar section
			app.favoritesFileList = new OCA.Files.FavoritesFileList(
				$('#app-content-favorites'), {
					scrollContainer: $('#app-content')
				}
			);
		}
	};

})(OCA);

OC.Plugins.register('OCA.Files.App', OCA.Files.FavoritesPlugin);

