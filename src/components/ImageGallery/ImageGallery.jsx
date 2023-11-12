import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="gallery">
        {this.props.hits.map(hit => (
          <ImageGalleryItem
            id={hit.id}
            webformatURL={hit.webformatURL}
            largeImageURL={hit.largeImageURL}
            alt={hit.tags}
            handleClick={this.props.handleClick}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  hits: PropTypes.number,
};
