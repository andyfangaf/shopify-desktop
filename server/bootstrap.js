import Liquid from 'liquid-node';
import fs from 'fs-extra';

Meteor.startup(() => {

  // Force login on startup
  User.remove({});
  User.insert({
    loggedIn: false,
    themes: [],
    html: '',
    editable: false,
    screenSize: 'desktop'
  });

  Shopify.addKeyset('auth', {
    api_key: Meteor.settings.shopify.key,
    secret: Meteor.settings.shopify.secret
  });
  Shopify.harden();
});
