import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import SearchBar from './SearchBar/SearchBar';

export class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Button />
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Modal />
      </div>
    );
  }
}
