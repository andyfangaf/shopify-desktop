MainLayout = React.createClass({
	render() {
		return (
			<div>
			mainlayout
				{this.props.content}
				{this.props.footer}
			</div>
		)
	}
});