ThemeSelection = React.createClass({
   mixins: [ReactMeteorData],
   getMeteorData() {
      return {
         user: User.findOne({
            loggedIn: true
         }, {
            themes: {
               $exists: true
            }
         })
      }
   },
   setInitialState() {
      return {themeSelected: false}
   },
   componentDidMount() {
      var component = this;
      console.log('mounted');
      $('.ui.dropdown').dropdown({
         action(selected) { // when the theme is selected
            component.setState({themeSelected: true});
         }
      });
      console.log('dropped down');
   },
   componentDidUpdate() {
      $('.ui.dropdown').dropdown('refresh');
   },
   render() {
      let themes = this.data.user.themes.map((theme) => {
         console.log(`Logging ${theme}`);
         return (
            <div className="item" key={theme.id}>{theme.name}</div>
         )
      });
      return (
         <div>
            <h1>
               <i className="notched circle loading icon"></i>Loading theme...</h1>
            <div className="ui selection dropdown">
               <input type="hidden" name="themes"/>
               <i className="dropdown icon"></i>
               <div className="default text">Select a theme</div>
               <div className="menu">
                  {themes}
               </div>
            </div>
         </div>
      )
   }
});
