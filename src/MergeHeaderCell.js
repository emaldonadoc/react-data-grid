const React = require('react');

const MergeHeaderCell = React.createClass({
  propTypes: {
    columnKey: React.PropTypes.string.isRequired,
    column: React.PropTypes.shape({ name: React.PropTypes.node }),
    onSort: React.PropTypes.func.isRequired,
    sortDirection: React.PropTypes.oneOf(['ASC', 'DESC', 'NONE'])
  },

  render: function () {
    console.log('Render merge cell');
    return (
      <div>
        <span>{this.props.title}</span>
        <div>{this.props.subColumn}</div>
      </div>
    );
  }
});
