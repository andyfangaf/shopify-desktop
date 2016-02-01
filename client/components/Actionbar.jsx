Actionbar = React.createClass({
	render() {
		return (
<div className="actionbar">
  <div className="ui container">
    <div className="ui text menu">
      <div className="header item">PREVIEW MODE</div>
      <a className="active item">
        <i className="ui icon desktop"></i>Desktop
      </a>
      <a className="item">
        <i className="ui icon tablet"></i>Tablet
      </a>
      <a className="item">
        <i className="ui icon mobile"></i> Mobile
      </a>
      <div className="right menu">
        <a className="item">
          <span className="ui primary button">Publish to Shopify</span>
        </a>
      </div>
    </div>
  </div>
</div>
		        )
	}
})