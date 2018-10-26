import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { welcomeFetchData } from '../../actions/welcome';
import SocialNetworkComponent from '../SocialNetwork/SocialNetwork';
import './welcome.scss';

export class Welcome extends Component {
  componentDidMount() {
    const { fetchWelcome } = this.props;
    fetchWelcome();
  }

  render() {
    const { words, isLoading, hasErrored } = this.props;
    let title;
    if (hasErrored || isLoading || !words.length) {
      title = <h1>We are Maltem</h1>;
    } else {
      title = (
        <h1>
          <div>We are </div>
          <Typing speed={100} loop>
            {
              words.map(item => (
                <div key={item.id}>
                  {item.word}
                  <Typing.Delay ms={5000} />
                  <Typing.Backspace count={item.word.length} />
                </div>
              ))
            }
          </Typing>
        </h1>
      );
    }

    return (
      <div className="welcome">
        {title}
        <SocialNetworkComponent />
        <span className="welcome-arrow">
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </span>
      </div>
    );
  }
}

Welcome.propTypes = {
  fetchWelcome: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  words: PropTypes.arrayOf(Object).isRequired,
};

export const mapStateToProps = ({ welcome }) => ({
  words: welcome.words,
  hasErrored: welcome.hasErrored,
  isLoading: welcome.isLoading,
});

export const mapDispatchToProps = dispatch => ({
  fetchWelcome: () => dispatch(welcomeFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
