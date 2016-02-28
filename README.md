# Shopify Desktop
A concept intended to make theme editing intuitive and productive without sacrificing utility. [You can read the making of Shopify Desktop on Medium.]()

## Features
- [x] Edit/ preview mode
- [x] Edit source of current page
- [x] Usable on trial and premium accounts

### Disabled
- [ ] Publish modifications
- [ ] Edit unpublished themes
- [ ] Live preview changes made from text editor into preview pane
- [ ] Dynamic sidebar widgets based on Liquid settings

## Downloads
[Download the binary for OSx]()

## Development
Make sure you have [Meteor](https://www.meteor.com/install) and [Electron](https://github.com/electron-userland/electron-prebuilt) installed globally. You'll also need a [Shopify Partner](https://www.shopify.ca/partners) account to access the API.

1. `npm install`
2. Edit `dev.settings.json` in the project's root directory with a your Shopify app key and secret
3. Build the Meteor app `electrify --settings dev.settings.json`

## Disclaimer
I don't work at Shopify; in fact I'm only a mere mortal. This was built primarily to learn React + Meteor work together while testing my new scaffolding tool, [Comet](https://github.com/afang/comet).
