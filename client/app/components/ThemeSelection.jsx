// FEATURE IS DISABLED
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
      }) || []
    }
  },
  setInitialState() {
    return {themeSelected: false}
  },
  render() {
    // let themes = this.data.user.themes.map((theme) => {
    //   console.log(`Logging ${theme}`);
    // });
    return (
      <div className="ui basic modal theme-import">
        <h1>Ready to get started?</h1>
      </div>
    )
  }
});
