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
  getInitialState() {
    return {editable: false, loading: true}
  },
  switchModes(e) {
    if (e.keyCode == '18') {
      this.setState({
        editable: !this.state.editable
      });
      this.state.editable
        ? document.body.contentEditable = 'true'
        : document.body.contentEditable = 'false';
    }
  },
  componentDidMount() {
    window.addEventListener('keydown', this.switchModes);
    $('.ui.dimmer').dimmer({closable: false}).dimmer('show');
  },
  showLoading() {
    console.log('Loading new page..');
  },
  componentDidUpdate(e) {
    console.log(this.data.contents);
    let $html = $.parseHTML(this.data.contents);
    $('body').html(this.data.contents.body);
    $('head').html(this.data.contents.head);

    $('a[href]').on('click', (e) => { // if a url is clicked, proxy the route
      e.preventDefault();
      this.showLoading();
      this.setState({loading: true});
      let route = e.currentTarget.getAttribute('href')
      console.log(`Proxying ${route}...`);

      Meteor.callPromise('proxyShopify', `https://batcave-shop.myshopify.com${route}`).then(res => {
        this.setState({loading: false});
      });
    });

  },
  render() {

    let loading;
    if (this.state.loading) {
      loading = (
        <div className="ui segment" style={{
          height: '100vh'
        }}>
          <div className="ui inverted dimmer">
            <div className="ui text loader">Loading from Shopify</div>
          </div>
        </div>
      )
    }
    return (
      <div className="appFrame" spellCheck="false">
        {loading}
      </div>
    )
  }
});
