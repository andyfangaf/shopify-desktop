FlowRouter.route('/', {
	name: 'Home',
	action() {
		ReactLayout.render(MainLayout, {
			header: <Metabar/>,
			content: <Site/>,
			footer: <Actionbar/>
		});
	}
});
FlowRouter.route('/login', {
	name: 'Login',
	action() {
		ReactLayout.render(LoginLayout);
	}
});
