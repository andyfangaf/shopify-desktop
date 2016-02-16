ThemeSelection = React.createClass({
   getMeteorData() {
      return {themes: Session.get('themes')}
   },
   setInitialState() {
      return {themeSelected: false}
   },
   componentDidMount() {
      console.log(Session.get('themes'));
      var component = this;
      $('.ui.dropdown').dropdown({
         action(selected) { // when the theme is selected
            component.setState({themeSelected: true});
         }
      });
   },
   render() {
      console.log(this.data.themes);
      console.log(Session.get('themes'));
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
                     console.log(theme, i);
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
