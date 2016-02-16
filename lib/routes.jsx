FlowRouter.route('/', {
   name: 'Home',
   action() {
      ReactLayout.render(MainLayout);
   }
});
FlowRouter.route('/login', {
   name: 'Login',
   action() {
      ReactLayout.render(LoginLayout);
      if (Session.get('keyset')) {
         FlowRouter.go('/')
      }
   }
});
