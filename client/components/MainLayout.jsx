MainLayout = React.createClass({
   getInitialState() {
      return {screenSize: 'desktop', published: false, editable: false}
   },
   componentDidMount() {
      let pusherWidth = $(window).width() - $('.ui.sidebar').width() - 56;
      $('.pusher').width(pusherWidth);
      $(window).on('resize', _.debounce(() => {
         let pusherWidth = $(window).width() - $('.ui.sidebar').width() - 56;
         $('.pusher').width(pusherWidth);
      }, 50));
   },
   switchMobile() {
      this.setState({screenSize: 'mobile'});
   },
   switchTablet() {
      this.setState({screenSize: 'tablet'});
   },
   switchDesktop() {
      this.setState({screenSize: 'desktop'});
   },
   switchModes(e) {
      if (e.keyCode == '18') {
         this.setState({
            editable: !this.state.editable
         });
      }
   },
   render() {
      window.addEventListener('keydown', this.switchModes);
      let publishButton = this.state.published
         ? 'ui primary button'
         : 'ui primary button disabled';
      let editableState = this.state.editable
         ? 'EDIT MODE'
         : 'PREVIEW MODE';
      return (
         <div className="main">
            <div className="ui sidebar inverted vertical menu fixed right wide visible">
               <div className="header">
                  <h1>Add a product</h1>
               </div>
               <div className="content">
                  <div className="ui inverted form">
                     <div className="field">
                        <label>Product Name</label>
                        <input type="text" placeholder="E.g. Batarang"/>
                     </div>
                     <div className="field">
                        <label>Price</label>
                        <input type="text" placeholder="E.g. $500"/>
                     </div>
                     <div className="field">
                        <label>Description</label>
                        <textarea rows="4"></textarea>
                     </div>
                  </div>
               </div>
               <div className="footer">
                  <button className="ui primary button">Save changes</button>
               </div>
            </div>
            <div className="pusher">
               <Metabar/>
               <Site screenSize={this.state.screenSize}/>
               <div className="actionbar">
                  <div className="ui container">
                     <div className="ui text menu">
                        <div className="header item">{editableState}</div>
                        <a className={this.state.screenSize == 'desktop'
                           ? 'active item'
                           : 'item'} onClick={this.switchDesktop}>
                           <i className="ui icon desktop"></i>Desktop
                        </a>
                        <a className={this.state.screenSize == 'tablet'
                           ? 'active item'
                           : 'item'} onClick={this.switchTablet}>
                           <i className="ui icon tablet"></i>Tablet
                        </a>
                        <a className={this.state.screenSize == 'mobile'
                           ? 'active item'
                           : 'item'} onClick={this.switchMobile}>
                           <i className="ui icon mobile"></i>
                           Mobile
                        </a>
                        <div className="right menu">
                           <a className="item">
                              <span className={publishButton}>Publish to Shopify</span>
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
