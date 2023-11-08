import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default class Button extends Component {
  render() {
    if (
      this.props.currentPage * this.props.perPage < this.props.totalHits &&
      this.props.loading === false
    ) {
      return (
        <div className="button-block">
          <button
            onClick={this.props.handleLoadMore}
            className="button-load"
            type="button"
          >
            Load more
          </button>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

Button.propTypes = {};
