// We're using insecure to make development faster. Security's not a concern since in production it's packaged in Electron (without easy access dev tools) and the user only has access to data he owns.

MainLayout = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      editable: User.findOne().editable || false
    }
  },
  getInitialState() {
    return {screenSize: 'desktop', published: false, editable: false, storeName: User.findOne().storeName}
  },
  componentDidMount() {
    sweetAlert({title: 'Logged in', type: 'success'});

    // Set size of sidebar and throttle resizing
    let pusherWidth = $(window).width() - $('.ui.sidebar').width() - 56;
    $('.pusher').width(pusherWidth);
    $(window).on('resize', _.debounce(() => {
      let pusherWidth = $(window).width() - $('.ui.sidebar').width() - 56;
      $('.pusher').width(pusherWidth);
    }, 50));
    let component = this;
    // Hardcoded sidebar interation
    $('iframe').load(function() {
      $(this).contents().find('body').on('click', function(e) {
        console.log(component.state);
        if (component.data.editable == true) {
          component.widgetIn();
        }
        component.setState({published: false});
      });
    });

  },
  switchMobile() {
    this.setState({screenSize: 'mobile'})
  },
  switchDesktop() {
    this.setState({screenSize: 'desktop'})
  },
  publishToShopify() {
    Electrify.call('notify', `Published ${this.state.storeName}`, `Live on https://${this.state.storeName}.my-shopify.com`);
    this.setState({published: true});
  },
  widgetIn() {
    $header = $('.ui.sidebar .header');
    $content = $('.ui.sidebar .content');

    $header.html(`<h1><i class="ui icon shop"></i>Add a product</h1>`);
    $content.html(`<div class="ui inverted form">
      <div class="field">
        <label>Product Name</label>
        <input type="text" placeholder="E.g. Batarang"/>
      </div>
      <div class="field">
        <label>Price</label>
        <input type="text" placeholder="E.g. $500"/>
      </div>
      <div class="field">
        <label>Description</label>
        <textarea rows="4"></textarea>
      </div>
      <div class="field">
        <label>Upload an Image</label>
        <img class="ui medium bordered image" src="//placehold.it/300x200"/>
      </div>
    </div>`)

    $('.content').velocity('transition.slideLeftBigIn', {
      duration: 300,
      opacity: 1
    });
  },
  render() {
    let storeUrl = `https://${this.state.storeName}.myshopify.com/admin`;
    return (
      <div className="main">
        <div className="ui sidebar inverted vertical menu fixed right wide visible">
          <div className="header">
            <h1>
              <i className="ui icon home"></i>How to use</h1>
          </div>
          <div className="content" ref="sidebar">
            <ol>
              <li>Navigate the site like a user would.</li>
              <li>Once you've reached a page you wish to edit, press the option key to switch to edit mode.</li>
              <li>You can now change text. Special actions will appear on the sidebar.</li>
              <li>Once you've finished making changes, click the Publish button to make your store go live.</li>
            </ol>

          </div>
          <div className="footer">
            <a href={storeUrl} target="_blank" data-content="Go to Shopify Admin" data-variation="inverted">
              <img className="ui rounded image spaced floated left" src="http://cockahoop-digital.co.uk/wp-content/uploads/shopify-buttons-125x125-green.png" width="40" height="40"/>
              <div>
                {this.state.storeName}
                <br></br>
                <span>Andy Fang</span>
              </div>
            </a>
          </div>
        </div>
        <div className="pusher">
          <Metabar/>
          <Site screenSize={this.state.screenSize} editable={this.data.editable}/>
          <div className="actionbar">
            <div className="ui container">
              <div className="ui text menu">
                <div className="header item" style={this.data.editable
                  ? {
                    color: '#fff'
                  }
                  : null}>
                  <i className={this.data.editable
                    ? 'ui icon edit'
                    : 'ui icon idea'}></i>{this.data.editable
                    ? 'EDIT MODE'
                    : 'PREVIEW MODE'}</div>
                <a className={this.state.screenSize == 'desktop'
                  ? 'active item'
                  : 'item'} onClick={this.switchDesktop}>
                  <i className="ui icon desktop"></i>Desktop
                </a>
                <a className={this.state.screenSize == 'mobile'
                  ? 'active item'
                  : 'item'} onClick={this.switchMobile}>
                  <i className="ui icon mobile"></i>
                  Mobile
                </a>
                <div className="right menu">
                  <a className="item">
                    <button className="ui icon basic inverted button">
                      <i className="code icon"></i>
                    </button>
                  </a>
                  <a className="item" onClick={this.publishToShopify}>
                    <span className={this.state.published
                      ? 'ui primary button disabled publish'
                      : 'ui primary button publish'}>Publish to Shopify</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
