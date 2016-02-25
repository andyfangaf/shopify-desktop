Metabar = React.createClass({
  getInitialState() {
    return {
      screenSize: `1440px`,
      screenSizes: [
        1440,
        1290,
        960,
        840,
        600,
        480
      ],
      previousHover: null
    }
  },
  componentDidMount() {
    $('.help.icon').on('click', () => {
      $('.ui.modal.help').modal('setting', {transition: 'fade up'}).modal('show');
    });
  },
  changeScreenSize(e) {
    console.log(e);
    this.setState({screenSize: e.target.innerText});
    console.log(`Changed state to ${this.state.screenSize}`);
  },
  displayScreenSize(e) {
    console.log(e);
    e.target.innerText = e.target.dataset.screensize;
    this.setState({previousHover: e.target});
  },
  hideScreenSize(e) {
    e.target.innerText = '';
  },
  render() {
    let sizeNav = this.state.screenSizes.map((size, i) => {
      let sizeCss = {
        width: `${ (size / 1440 * 100) - 10}%`,
        zIndex: i + 1
      };
      let sizeClass = `item size-${size}`;
      let sizeText = `${size}px`;
      return (
        <div className={sizeClass} style={sizeCss} key={i} data-screensize={size} onClick={this.changeScreenSize} onMouseOver={this.displayScreenSize} onMouseLeave={this.hideScreenSize}></div>
      )
    });
    return (
      <div className="ui text menu metabar">
        <div className="ui fluid text menu resize-bar six item">
          {sizeNav}
        </div>
        <script src="https://use.typekit.net/cnw7lzi.js"></script>
        <div className="ui modal basic help">
          <div className="ui grid">
            <h1 className="tk-chalky">Help</h1>
            <br></br>
            <h2>Preview/ edit mode</h2>
            <p>You can navigate your site like normal on the left. When you want to edit content, press
              <code>option</code>
              to switch to preview mode. Click on elements you wish to change, and the options will pop up on the right sidebar. You can change text by typing directly on the selected component. Click on "Publish to Shopify" once you're done to make your changes live.</p>
            <h2>Preview different screen sizes</h2>
            <p>You can see how your store looks like on different screen sizes by clicking on the different screen sizes in the Actionbar.</p>

            <div className="row tk-chalky">
              <a href="https://www.facebook.com/AndyFang1998">
                <i className="large facebook square icon"></i>AndyFang1998
              </a>
            </div>
            <div className="row">
              <a href="http://medium.com/">Read the making of Shopify Desktop</a>
            </div>
          </div>
        </div>
        <ThemeSelection/>
      </div>
    )
  }
});
