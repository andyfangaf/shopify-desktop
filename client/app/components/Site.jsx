Site = React.createClass({
   componentDidMount() {
      $('.appFrame').attr('contenteditable', 'true');
      console.log('done');
   },
   render() {
      return (
         <div className="ui centered grid container">
            <div className={`ui segment site ${this.props.screenSize}`}>
               <iframe src="http://batman-shop.myshopify.com/" className="appFrame"></iframe>
            </div>
         </div>
      )
   }
});
