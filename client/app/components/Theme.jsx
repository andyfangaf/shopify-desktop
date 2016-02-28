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
    $('.ui.dimmer').dimmer({closable: false}).dimmer('show');
  },
  componentDidUpdate() {
    document.designMode = "on";
    console.log(this.data.contents);
    let $html = $.parseHTML(this.data.contents);
    $('body').html(this.data.contents.body);
    $('head').html(this.data.contents.head);

    $('a[href]').on('click', (e) => { // if a url is clicked, proxy the route
      e.preventDefault();
      let route = e.currentTarget.getAttribute('href')
      console.log(` https : //batcave-shop.myshopify.com${route}`);

      Meteor.callPromise('proxyShopify', `https://batcave-shop.myshopify.com${route}`).then(res => {
        console.log('updated', res);
      })

    });
  },
  render() {
    return (
      <div className="appFrame" spellCheck="false">
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
