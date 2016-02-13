Metabar = React.createClass({
   componentDidMount() {
      $('.help.icon').on('click', () => {
         $('.ui.modal.help').modal('setting', {transition: 'fade up'}).modal('show');
      });
   },
   render() {
      return (
         <div className="ui text menu metabar">
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
            <div className="ui basic modal theme-import">
               <h1>
                  <i className="notched circle loading icon"></i>
                  Loading theme...</h1>
            </div>
            <a className="item right menu">
               <button className="large ui icon button help circular">
                  <i className="help icon"></i>
               </button>
            </a>
         </div>
      )
   }
});
