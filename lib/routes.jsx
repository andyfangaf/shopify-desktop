FlowRouter.route('/', {
  name: 'Home',
  action() {
    FlowRouter.go('/');
    if (!User.findOne().loggedIn) {
      FlowRouter.go('/login');
      console.log(`Logged off`);
    } else {
      ReactLayout.render(MainLayout); // don't show login success modal on mount
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
  action(params) {
    Meteor.callPromise('proxyShopify', 'https://batcave-shop.myshopify.com/').then(html => {
      $('head').html(html.head); // load all scripts and styles before rendering the body
      $('body').html(html.body);
    });
    ReactLayout.render(Theme);
  }
});
