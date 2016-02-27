Theme = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      contents: User.findOne({
        html: {
          $exists: true
        }
      }).html
    }
  },
  componentDidMount() {
    document.designMode = "on";
    $('.ui.dimmer').dimmer({closable: false}).dimmer('show');
  },
  componentDidUpdate() {
    console.log('updated component');
    let html = $.parseHTML(this.data.contents);
    $('html').html(html);
  },
  render() {
    return (
      <div className="appFrame">
        <div className="ui segment" style={{
          height: '100vh'
        }}>
          <div className="ui inverted dimmer">
            <div className="ui text loader">Loading from Shopify</div>
          </div>
        </div>
      </div>
    )
  }
});
