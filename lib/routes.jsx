FlowRouter.route('/', {
   name: 'Home',
   action() {
      if (!Session.get('keyset')) {
         FlowRouter.go('/login');
      }
      ReactLayout.render(MainLayout);
   }
});
FlowRouter.route('/login', {
   name: 'Login',
   action() {
      ReactLayout.render(LoginLayout);
      if (Session.get('keyset')) {
         FlowRouter.go('/');
      }
   }
});
