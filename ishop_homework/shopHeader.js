let shopHeader = React.createClass({
  displayName: "Shop Header",
  render: function () {
    let finalHeaders = this.props.headers.map((w, i) =>
      React.DOM.th({ className: "table-header", key: i }, w)
    );
    return React.DOM.tbody(null, React.DOM.tr(null, finalHeaders));
  },
});
