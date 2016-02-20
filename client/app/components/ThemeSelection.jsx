ThemeSelection = React.createClass({
   mixins: [ReactMeteorData],
   getMeteorData() {
      return {
         themes: User.find({
            loggedIn: true
         }, {
            themes: {
               $exists: true
            }
         }).fetch()
      }
   },
   setInitialState() {
      return {themeSelected: false}
   },
   componentDidMount() {
      var component = this;
      $('.ui.dropdown').dropdown({
         action(selected) { // when the theme is selected
            component.setState({themeSelected: true});
         }
      });
   },
   render() {
      return (
         <div>
            <h1>
               <i className="notched circle loading icon"></i>Loading theme...</h1>
            <div className="ui selection dropdown">
               <input type="hidden" name="themes"/>
               <i className="dropdown icon"></i>
               <div className="default text">Select a theme</div>
               <div className="menu">
                  {this.data.themes.map((theme, i) => {
                     console.log(theme.name, i);
                     return (
                        <div className="item" key={i}>{theme.name}</div>
                     )
                  })}
               </div>
            </div>
         </div>
      )
   }
});
