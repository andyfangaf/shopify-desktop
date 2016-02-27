FlowRouter.route('/', {
  name: 'Home',
  action() {
    FlowRouter.go('/');
    ReactLayout.render(MainLayout);
    if (!User.findOne().loggedIn) {
      FlowRouter.go('/login');
      console.log(`Logged in`);
    }

  }
});
FlowRouter.route('/login', {
  name: 'Login',
  action() {
    FlowRouter.go('/login');
    ReactLayout.render(LoginLayout);
    if (User.findOne().loggedIn) {
      FlowRouter.go('/');
    }
    console.log(`Logged in`);
  }
});

FlowRouter.route('/theme', {
  name: 'Theme',
  action() {
    Meteor.callPromise('proxyShopify', 'https://batcave-shop.myshopify.com/').then(res => {
      Meteor.callPromise('updateCurrentPage', res);
    });
    ReactLayout.render(Theme);
  }
});
