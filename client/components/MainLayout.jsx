MainLayout = React.createClass({
   getInitialState() {
      return {screenSize: 'desktop', published: false, editable: false}
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
      if (e.keyCode == '65') {
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
      )
   }
});
