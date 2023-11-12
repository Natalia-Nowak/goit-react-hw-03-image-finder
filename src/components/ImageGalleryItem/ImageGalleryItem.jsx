import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li key={this.props.id.toString()} className="gallery-item">
        <img
          onClick={() => this.props.handleClick(this.props.largeImageURL)}
          className="img"
          width="400px"
          height="250px"
          src={this.props.webformatURL}
          alt={this.props.alt}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  handleClick: PropTypes.string,
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  alt: PropTypes.string,
};
