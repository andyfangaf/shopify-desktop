Site = React.createClass({
   componentDidMount() {
      $('.ui.segment.site').html('<button>buton</button>');
   },
   render() {
      return (
         <div className="ui left grid">
            <div className={`ui segment site ${this.props.screenSize}`}></div>
         </div>
      )
   }
});
