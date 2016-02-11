Site = React.createClass({
   render() {
      return (
         <div className="ui centered grid">
            <div className={`ui segment site ${this.props.screenSize}`}></div>
         </div>
      )
   }
});
