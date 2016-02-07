LoginLayout = React.createClass({
  authenticate(e) {
    e.preventDefault();
    let storeName = ReactDOM.findDOMNode(this.refs.storeName).value.trim();
    console.log(`Authenticating ${storeName}...`);
  },
  componentDidMount() {
    $.Velocity
      .RegisterEffect('transition.flipYin', {
        defaultDuration: 700,
        calls: [[{
          opacity: 1
        }]]
      });
    $('.slideIn')
      .velocity('transition.flipYin', {
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
		        <input className="ui green submit button" value="Authenticate" type="submit"/>
		        </div>
		        </form>
		        </div>
		        </div>
      )
  }
});