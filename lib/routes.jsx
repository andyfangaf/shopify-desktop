FlowRouter.route('/', {
   name: 'Home',
   action() {
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
      }
   }
});
FlowRouter.route('/login', {
   name: 'Login',
   action() {
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
   }
});
