LoginLayout = React.createClass({
   authenticate(e) {
      e.preventDefault();
      let storeName = ReactDOM.findDOMNode(this.refs.storeName).value.trim();
      Meteor.call('addKeyset', storeName, (err, keysetName) => {
         err
            ? console.log(err)
            : console.log(`Authenticating ${storeName}...`);
         Session.set('keyset', keysetName);
         Session.set('storeName', storeName);

         let authenticator = new Shopify.PublicAppOAuthAuthenticator({
            shop: storeName, api_key: '53ea809b4180e0b1db2706a6fe5ffedb', keyset: 'auth', scopes: 'all', // request all permissions
            onAuth: function(accessToken) {
               FlowRouter.go('/');
               $('.ui.modal.theme-import').modal('setting', {
                  closable: false,
                  transition: 'fade up'
               }).modal('show');

               var api = new Shopify.API({shop: Session.get('storeName'), keyset: Session.get('keyset')});
               api.getThemes((err, res) => {
                  err
                     ? console.log(err)
                     : console.log(`All themes:\n${res}`);

               });
            }
         });
         authenticator.openAuthTab();
      });
   },
   componentDidMount() {
      $.Velocity.RegisterEffect('transition.flipYin', {
         defaultDuration: 700,
         calls: [
            [
               {
                  opacity: 1
               }
            ]
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
            <img src="shopify-icon.png" className="ui centered image slideIn"/>
            <div className="ui segment container slideIn">
               <form className="ui large form" onSubmit={this.authenticate}>
                  <div className="ui action input">
                     <input type="text" placeholder="Your store name" ref="storeName"/>
                     <input className="ui primary submit button" value="Login to Shopify" type="submit"/>
                  </div>
               </form>
            </div>
         </div>
      )
   }
});
