# Shopify Desktop
It aims to simplify the theme editing experience while offering enough utility to be a productive tool. [You can read the making of Shopify Desktop on Medium.]()

## Features
- [x] Edit/ preview mode
- [x] Edit source of current page
- [x] Usable on trial and premium accounts
- [ ] Publish modifications
- [ ] Edit unpublished themes

## Downloads
[Download the binary for OSx]()

## Development
Make sure you have [Meteor](https://www.meteor.com/install) and [Electron](https://github.com/electron-userland/electron-prebuilt) installed globally.
1. `npm install`
2. Create a `settings.json` in the project's root directory with the following contents:
3. {
4. "shopify": {
5. "key": "YOUR_SHOPIFY_API_KEY",
6. "secret": "YOUR_SHOPIFY_SECRET"
7. }
8. }
9. Build the Meteor app `electrify --settings settings.json`

## Disclaimer
I don't work at Shopify; in fact I'm only a mere mortal. This was built primarily to learn React + Meteor work together while testing my new scaffolding tool, [Comet](https://github.com/afang/comet).
