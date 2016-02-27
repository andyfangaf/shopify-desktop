Site = React.createClass({
  componentDidMount() {
    Meteor.callPromise('proxyShopify', 'https://batcave-shop.myshopify.com/').then(res => {
      $('.appFrame').html(res);
    });

  },
  render() {
    return (
      <div className="ui centered grid container">
        <div className={`ui segment site ${this.props.screenSize}`}>
          <div className="appFrame"></div>
        </div>
      </div>
    )
  }
});
