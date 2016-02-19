Site = React.createClass({
   componentDidMount() {
      $('.appFrame').attr('contenteditable', 'true');
   },
   render() {
      return (
         <div className="ui left grid">
            <div className={`ui segment site ${this.props.screenSize}`}>
               <iframe src="http://batman-shop.myshopify.com/" className="appFrame"></iframe>
            </div>
         </div>
      )
   }
});
