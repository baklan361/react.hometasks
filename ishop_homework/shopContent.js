let shopContent = React.createClass({
  displayName: "Shop Content",
  getInitialState: function () {
    return { selectedItem: null };
  },
  selectItem: function (EO) {
    console.log(this.state);
    this.setState({
      selectedItem: EO.target.parentElement.getAttribute("data-key"),
    });
  },
  deleteItem: function (EO) {
    console.log(EO.target.parentElement.parentElement);
    this.props.goods.splice(
      EO.target.parentElement.parentElement.getAttribute("data-key"),
      1
    );
    this.setState({});
    EO.stopPropagation();
  },
  render: function () {
    let filling = this.props.goods.map((w, i) =>
      React.DOM.tr(
        {
          key: i,
          onClick: this.selectItem,
          "data-key": i,
          className: i == this.state.selectedItem ? "selected" : null,
        },
        React.DOM.td(null, w.name),
        React.DOM.td(null, w.price),
        React.DOM.td(null, w.url),
        React.DOM.td(null, w.quantity),
        React.DOM.td(
          null,
          React.DOM.button({ onClick: this.deleteItem }, "Delete")
        )
      )
    );
    return React.DOM.tbody(null, filling);
  },
});
