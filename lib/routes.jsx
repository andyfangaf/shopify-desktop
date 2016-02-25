FlowRouter.route('/', {
  name: 'Home',
  action() {
    FlowRouter.go('/');
    ReactLayout.render(MainLayout);
    if (!User.find({
      loggedIn: true,
      keyset: {
        $exists: true
      }
    }, {
      keyset: {
        $exists: true
      }
    }).count() > 0) {
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
    if (User.find({
      loggedIn: true,
      keyset: {
        $exists: true
      }
    }, {
      keyset: {
        $exists: true
      }
    }).count() > 0) {
      FlowRouter.go('/');
    }
    console.log(`Logged in`);
  }
});
