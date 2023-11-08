import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';
// import { searchPics } from './api-pixabay.js';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      hits: [],
      searchQuery: '',
      totalHits: 0,
      currentPage: 1,
      perPage: 12,
      loading: false,
    };
  }
  handleSubmit = async event => {
    event.preventDefault();

    this.setState({
      loading: true,
    });

    const apiKey = '31724957-a5b65aed33845330804f8a3d2';
    const response = await axios.get(
      `https://pixabay.com/api/?q=${this.state.searchQuery}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
    );

    this.setState({
      data: response.data,
      hits: response.data.hits,
      totalHits: response.data.totalHits,
      currentPage: 1,
      loading: false,
    });
  };

  changeQuery = event => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  handleLoadMore = async event => {
    const incrementPage = this.state.currentPage + 1;

    this.setState({
      loading: true,
    });

    const apiKey = '31724957-a5b65aed33845330804f8a3d2';
    const response = await axios.get(
      `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${incrementPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
    );
    console.log(response);
    this.setState(prevState => ({
      data: response.data,
      hits: [...prevState.hits, ...response.data.hits],
      totalHits: response.data.totalHits,
      currentPage: incrementPage,
      loading: false,
    }));
    console.log(incrementPage);
  };

  render() {
    const { hits } = this.state;
    const { searchQuery } = this.state;
    const { perPage } = this.state;
    const { currentPage } = this.state;
    const { totalHits } = this.state;
    const { loading } = this.state;
    return (
      <div>
        <Searchbar
          searchQuery={searchQuery}
          handleSubmit={this.handleSubmit}
          changeQuery={this.changeQuery}
        />
        <ImageGallery hits={hits} />
        <Button
          totalHits={totalHits}
          currentPage={currentPage}
          perPage={perPage}
          loading={loading}
          handleLoadMore={this.handleLoadMore}
        />
        <Loader loading={loading} />
        <Modal />
      </div>
    );
  }

  async componentDidMount() {
    const apiKey = '31724957-a5b65aed33845330804f8a3d2';
    const response = await axios.get(
      `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
    );
    this.setState({
      data: response.data,
      hits: response.data.hits,
      totalHits: response.data.totalHits,
    });

    console.log(response.data);
  }
}
