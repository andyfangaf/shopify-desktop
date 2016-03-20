# Shopify Desktop
A concept intended to make theme editing intuitive and productive without sacrificing utility. [You can read the making of Shopify Desktop on Medium.]()

![](http://puu.sh/nokTK/73dea38d06.png)

## Features
- [x] Edit/ preview mode
- [x] Edit source of current page
- [x] Usable on trial and premium accounts

### Not working
- [ ] Publish modifications
- [ ] Edit unpublished themes
- [ ] Live preview changes made from text editor into preview pane
- [ ] Dynamic sidebar widgets based on Liquid settings

## Downloads
Download the binary for OSx

## Development
Make sure you have [Meteor](https://www.meteor.com/install) and [Electron](https://github.com/electron-userland/electron-prebuilt) installed globally. You'll also need a [Shopify Partner](https://www.shopify.ca/partners) account to access the API.

1. Install dependencies `npm install`
1. Edit `dev.settings.json` in the project's root directory with your Shopify app key and secret
2. Run the Meteor app `electrify --settings dev.settings.json` (this will automatically install dependencies)

## Disclaimer
I don't work at Shopify; I'm a mere mortal trying to get better with React + Meteor while testing my scaffolding tool, [Comet](https://github.com/afang/comet).
