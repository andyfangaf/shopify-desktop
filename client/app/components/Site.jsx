Site = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {screenSize: User.findOne().screenSize}
  },
  getScreenWidth() {
    return {width: `${this.data.screenSize}px !important`}
  },
  render() {
    return (
      <div className="ui centered grid container" style={this.getScreenWidth()}>
        <div className={`ui segment site ${this.props.screenSize}`}>
          <iframe src="/theme" className="appFrame"></iframe>
        </div>
      </div>
    )
  }
});
