FlowRouter.route('/', {
   name: 'Home',
   action() {
      if (!Session.get('keyset')) {
         ReactLayout.render(LoginLayout);
      } else {
         ReactLayout.render(MainLayout);
      }
   }
});
FlowRouter.route('/login', {
   name: 'Login',
   action() {
      ReactLayout.render(LoginLayout);
   }
});
