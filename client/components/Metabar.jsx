Metabar = React.createClass({
   componentDidMount() {
      $('.help.icon').on('click', () => {
         $('.ui.modal.help').modal('show');
      });
   },
   render() {
      return (
         <div className="ui text menu metabar">
            <script src="https://use.typekit.net/cnw7lzi.js"></script>
            <div className="ui modal basic help">
               <div className="ui centered grid">
                  <h1 className="tk-chalky">Instructions</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <h3>Made by Andy Fang</h3>
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
