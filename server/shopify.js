import fs from 'fs-extra';
import Liquid from 'liquid-node';
import Future from 'fibers';

keysetNames = {};
Shopify.onAuth((accessToken, config) => {
	var keysetName = keysetNames[config.shop];
	Shopify.addKeyset(keysetName, {
		access_token: accessToken,
	});
});

Meteor.methods({
	addKeyset(storeName) {
		let keysetName = Random.id(17);
		keysetNames[storeName] = keysetName;
		Shopify.addKeyset(keysetName, {
			api_key: Meteor.settings.shopify.key,
			secret: Meteor.settings.shopify.secret
		});
		return keysetName;
	},
	readFile(file) {
		return new Promise((resolve, reject) => {
			let filePath = `${Meteor.absolutePath}/public/themes/${file}`;
			console.log(filePath);
			fs.readFile(filePath, 'utf8', (err, res) => {
				err ? reject(err) : resolve(res);
			});
		});
	},
	getKeysetNames() {
		return keysetNames;
	}
});