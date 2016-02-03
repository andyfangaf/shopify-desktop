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
