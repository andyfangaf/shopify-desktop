ThemeSelection = React.createClass({
   mixins: [ReactMeteorData],
   getMeteorData() {
      userData = User.findOne({
         loggedIn: true,
         themes: {
            $exists: true
         }
      }, {id: 0});
      userData.themes.map(theme => console.log(`Theme: ${theme}`));
      return {themes: userData.themes};
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
      console.log(this.data.themes);
      return (
         <div>
            <h1>
               <i className="notched circle loading icon"></i>Loading theme...</h1>
            <div className="ui selection dropdown">
               <input type="hidden" name="themes"/>
               <i className="dropdown icon"></i>
               <div className="default text">Select a theme</div>
               <div className="menu">
                  {this.data.themes.map(theme => {
                     console.log(theme.name, theme.id);
                     return (
                        <div className="item" key={theme.id}>{theme.name}</div>
                     )
                  })}
               </div>
            </div>
         </div>
      )
   }
});
