import Liquid from 'liquid-node';
import fs from 'fs-extra';

Meteor.startup(() => {
	Shopify.addKeyset('auth', {
		api_key: Meteor.settings.shopify.key,
		secret: Meteor.settings.shopify.secret
	});
	Shopify.harden();
	console.log(keysetNames);
});