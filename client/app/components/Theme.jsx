Theme = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {contents: User.findOne().html, editable: User.findOne().editable}
  },
  getInitialState() {
    return {editable: false, loading: true}
  },
  switchModes(e) {
    if (e.keyCode == '18') {
      Meteor.call('toggleEditable', (err, res) => {
        res
          ? document.body.contentEditable = true
          : document.body.contentEditable = false;
        console.log(`Editable set to ${res}`);
      });
    }
  },
  componentDidMount() {
    window.addEventListener('keydown', this.switchModes);
    $('.ui.dimmer').dimmer({closable: false}).dimmer('show');
  },
  showLoading() {
    console.log('Loading new page..');
  },
  render() {
    $('a[href]').on('click', (e) => { // if a url is clicked, proxy the route
      e.preventDefault();
      console.log(this.data.editable);
      if (this.data.editable == false) {
        this.showLoading();
        this.setState({loading: true});
        let route = e.currentTarget.getAttribute('href')
        console.log(`Proxying ${route}...`);

        Meteor.callPromise('proxyShopify', `https://batcave-shop.myshopify.com${route}`).then(html => {
          this.setState({loading: false});
          $('head').html(html.head); // load all scripts and styles before rendering the body
          $('body').html(html.body);
        });
      }
    });
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
