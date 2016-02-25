ThemeSelection = React.createClass({
  mixins: [ReactMeteorData],
  componentDidMount() {
    // $('.ui.basic.modal.theme-import').modal('setting', {closable: true}).modal('show');
    $('.ui.grid .column').velocity('transition.bounceLeftIn', {stagger: 100});
  },
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
  render() {
    let themes = this.data.user.themes.map((theme) => {
      console.log(`Logging ${theme}`);
    });
    let options = [
      {
        value: 'one',
        label: 'One'
      }, {
        value: 'two',
        label: 'Two'
      }
    ];
    return (
      <div className="ui basic modal theme-import">
        <div className="ui three column relaxed grid">
          <div className="column">
            <a href="http://google.com/" className="ui medium image">
              <img src="//placehold.it/300x200"/></a>
          </div>
          <div className="column">
            <a href="http://google.com/" className="ui medium image">
              <img src="//placehold.it/300x200"/></a>
          </div>
          <div className="column">
            <a href="http://google.com/" className="ui medium image">
              <img src="//placehold.it/300x200"/></a>
          </div>
          <div className="column">
            <a href="http://google.com/" className="ui medium image">
              <img src="//placehold.it/300x200"/></a>
          </div>
          <div className="column">
            <a href="http://google.com/" className="ui medium image">
              <img src="//placehold.it/300x200"/></a>
          </div>
        </div>
      </div>
    )
  }
});
