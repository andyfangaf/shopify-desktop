Meteor.methods({
	'addKeyset' (keyname) {
		Shopify.addKeyset(keyname, { // don't want the keyset to be exposed to client, sao the `default` keyset holds the key and secret
			api_key: '2ee8520dfad4a03788455a613f39e5fb',
			secret: 'ea56257a4d95d29a6a79061158562edd'
		});
	}
});