FlowRouter.route('/', {
	name: 'Home',
	action() {
		ReactLayout.render(MainLayout, {
			content: <Login/>,
			footer: <Actionbar/>
		});
	}
});