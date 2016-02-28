// FEATURE IS DISABLED
ThemeSelection = React.createClass({
  mixins: [ReactMeteorData],
  componentDidMount() {
    // $('.ui.basic.modal.theme-import').modal('setting', {closable: true}).modal('show');
    // $('.ui.grid .column').velocity('transition.bounceLeftIn', {stagger: 100});
  },
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
