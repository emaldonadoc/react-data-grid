const React = require('react');


const MergeHeaderCells = React.createClass({
  propTypes: {
    headerCells: React.PropTypes.Array,
    title: React.PropTypes.string
  },

  render(): ?ReactElement {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>
          {
            this.props.headerCells.map(function(headerCell) {
              return (headerCell);
            })
          }
        </div>
      </div>
    );
  }

});

module.exports = MergeHeaderCells;
