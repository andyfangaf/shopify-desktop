import fs from 'fs-extra';
import Liquid from 'liquid-node';
var notifier = Meteor.require('node-notifier');

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

    User.update({
      loggedIn: true
    }, {
      $set: {
        storeName: storeName,
        keyset: keysetName
      }
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
  parseLiquid(fileContents, variables) {
    return new Promise((resolve, reject) => {
      // Variables data
      let variablesPath = `${Meteor.absolutePath}/public/themes/batman-shop-myshopify-com-launchpad-star/config/settings_data.json`;
      fs.readFile(variablesPath, 'utf8', (err, data) => {
        if (err) reject(err);

        let variables = JSON.parse(data);
        let engine = new Liquid.Engine;
        let parsedFile = engine.parseAndRender(fileContents, variables).then((res) => {
          resolve(res);
        }).catch(err => {
          throw new err
        });
      });
    });
  },
  addThemes(themes) {
    User.update({
      loggedIn: true
    }, {
      $set: {
        themes: themes
      }
    });
    themes.map((theme) => {
      console.log(`Added theme ${theme} to Mongo`);
    });
  }
});