import Liquid from 'liquid-node';
import fs from 'fs-extra';

Meteor.startup(() => {
	Shopify.harden();
});