window.ondragstart = function() {
  return false;
}

LoginLayout = React.createClass({
  authenticate(e) {
    e.preventDefault();
    $('.submit.button').addClass('disabled');
    const storeName = ReactDOM.findDOMNode(this.refs.storeName).value.trim();
    Meteor.call('addKeyset', storeName, (err, keysetName) => {
      const authenticator = new Shopify.PublicAppOAuthAuthenticator({
        shop: storeName, api_key: '53ea809b4180e0b1db2706a6fe5ffedb', keyset: 'auth', scopes: 'all', // request all permissions
        onAuth(accessToken) {
          const auth = User.findOne();
          const shop = auth.storeName;
          const keyset = auth.keyset;

          const api = new Shopify.API({shop, keyset});
          api.getThemes((err, res) => {
            err
              ? console.log(err)
              : res.map((theme, i) => console.log(`Theme ${i + 1}: ${theme.name}`));
            Meteor.call('addThemes', res);
          });
          FlowRouter.go('/');
          $('.ui.modal.theme-import').modal('setting', {
            // closable: false,
            transition: 'fade up'
          }).modal('show');
        }
      });
      authenticator.openAuthTab();
    });
  },
  componentDidMount() {
    $.Velocity.RegisterEffect('transition.flipYin', {
      defaultDuration: 700,
      calls: [
        [{
          opacity: 1
        }]
      ]
    });
    $('.slideIn').velocity('transition.flipYin', {
      stagger: 250,
      drag: true
    });
  },
  render() {
    return (
      <div className="login">
        <div className="ui grid">
          <img src="shopify-icon.png" className="ui centered image slideIn"/>
        </div>
        <div className="ui centered grid">
          <div className="ui segment container slideIn">
            <form className="ui large form" onSubmit={this.authenticate}>
              <div className="ui action input">
                <input type="text" placeholder="Your store name" ref="storeName"/>
                <input className="ui primary submit button" value="Login to Shopify" type="submit" ref="loginButton"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  },
  componentDidMount() {
    $('.slideIn').velocity('transition.slideUpIn', {stagger: 250});
  }
});
