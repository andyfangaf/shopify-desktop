Site = React.createClass({
  render() {
    return (
      <div className="ui centered grid container">
        <div className={`ui segment site ${this.props.screenSize}`}>
          <iframe src="/theme" className="appFrame"></iframe>
        </div>
      </div>
    )
  }
});
