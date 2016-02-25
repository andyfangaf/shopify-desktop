Site = React.createClass({
  componentDidMount() {
    $('.appFrame body').attr('contenteditable', 'true');
    console.log('done');
  },
  render() {
    return (
      <div className="ui centered grid container">
        <div className={`ui segment site ${this.props.screenSize}`}>
          <iframe src="https://batcave-shop.myshopify.com/" className="appFrame"></iframe>
        </div>
      </div>
    )
  }
});
