Meteor.startup(() => {

});

// server
Shopify.addKeyset("default", {
	api_key: "2ee8520dfad4a03788455a613f39e5fb",
	secret: "ea56257a4d95d29a6a79061158562edd",
});

Shopify.harden(); // you don't want accessToken exposed to client
Shopify.onAuth(function(accessToken, authConfig) {
	var shop = authConfig.shop;
	Shopify.addKeyset(shop, {
		access_token: accessToken
	});

    // do this server-side since that's where we have the accessToken
    Meteor.call('user/create', accessToken);
 });