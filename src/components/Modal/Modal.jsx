import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

export default class Modal extends Component {
  render() {
    return (
      <div class="overlay">
        <div class="modal">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {};
