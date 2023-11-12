import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';

export default class Searchbar extends Component {
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.props.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            value={this.props.searchQuery}
            onChange={this.props.changeQuery}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.string,
  searchQuery: PropTypes.string,
  changeQuery: PropTypes.string,
};
