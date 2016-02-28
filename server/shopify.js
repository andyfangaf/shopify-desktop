import fs from 'fs-extra';
import Liquid from 'liquid-node';
const phantom = Meteor.npmRequire('phantom'); // phantom promise library not working, webdriverio not working with Meteor
// const webdriverio = Meteor.npmRequire('webdriverio');
// const casper = Meteor.npmRequire('casper');
const Nightmare = Meteor.npmRequire('nightmare');
const cheerio = Meteor.npmRequire('cheerio');
const notifier = Meteor.npmRequire('node-notifier');

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
  },
  proxyShopify(url) {
    return new Promise((resolve, reject) => {
      console.log('Proxying shopify...');
      const nightmare = new Nightmare({
          show: false
        }).goto(url)
        .wait()
        .click('a[href="#LoginModal"]')
        .visible('#login_form')
        .insert('#password', 'stohra')
        .click('#login_form input[type="submit"]')
        .wait()
        .visible('#PageContainer')
        .wait(1000)
        .evaluate(() => {
          return document.getElementsByTagName('html')[0].outerHTML;
        })
        .end()
        .then((html) => {
          let $ = cheerio.load(html);
          let $head = $('head');
          let $body = $('body');
          let res = {
            head: $head.toString(),
            body: $body.toString()
          }
          User.update({
            loggedIn: true
          }, {
            $set: {
              html: res
            }
          });
          console.log(`Resolved ${url} to the client`);
          resolve(res);
        });
    });
  },
  changeScreenSize(size) {
    User.update({
      loggedIn: true
    }, {
      $set: {
        screenSize: size
      }
    });
  },
  toggleEditable() {
    let isEditable = User.findOne().editable;
    User.update({
      loggedIn: true
    }, {
      $set: {
        editable: !isEditable
      }
    });
  }
});