import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

export default class Modal extends Component {
  render() {
    if (this.props.showModal === true) {
      return (
        <div onClick={this.props.handleModalClose} className="overlay">
          <div className="modal">
            <img
              onKeyDown={this.props.onKeyPressed}
              src={this.props.urlModal}
              alt=""
            />
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

Modal.propTypes = {};
