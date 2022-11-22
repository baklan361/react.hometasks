let ishop = React.createClass({
  displayName: "ishop",
  render: function () {
    return React.DOM.table(
      { className: "table" },
      React.createElement(shopHeader, { headers: this.props.headers }),
      React.createElement(shopContent, {
        goods: this.props.goods,
      })
    );
  },
});
