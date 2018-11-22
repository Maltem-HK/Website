import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { agglomerateFetchData } from '../../actions/agglomerate';
import isEmpty from '../../utils/object';
import Conditional from '../Common/Conditional/Conditional';
import MaltemLogo from '../../assets/img/maltem-logo.png';
import './header.scss';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isHide: false };
    this.hideBar = this.hideBar.bind(this);
  }

  componentDidMount() {
    const { agglomerateFetch } = this.props;
    agglomerateFetch();
    window.addEventListener('scroll', this.hideBar);
  }

  hideBar() {
    this.setState({ isHide: (window.scrollY < window.innerHeight - 30) });
  }

  loadSuccess(dataKey) {
    const {
      agglomerate,
      agglomerate: {
        isLoading,
        hasErrored,
      },
    } = this.props;
    return !isLoading && !hasErrored && !isEmpty(agglomerate[dataKey]);
  }

  render() {
    const { isHide } = this.state;
    return (
      <nav className={`header ${isHide ? 'hide' : ''}`}>
        <ul>
          <li>
            <a href="#welcome">
              <img className="header-logo" src={MaltemLogo} alt="Maltem logo" />
            </a>
          </li>
          <li>
            <Conditional test={this.loadSuccess('generalinformation')}>
              <a href="#general-information">Maltem Consulting Group</a>
            </Conditional>
          </li>
          <li>
            <Conditional test={this.loadSuccess('team')}>
              <a href="#our-team">Our team</a>
            </Conditional>
          </li>
          <li>
            <Conditional test={this.loadSuccess('keyfigures')}>
              <a href="#key-facts">Key facts</a>
            </Conditional>
          </li>
          <li>
            <Conditional test={this.loadSuccess('about')}>
              <a href="#about-us">About us</a>
            </Conditional>
          </li>
        </ul>
      </nav>
    );
  }
}

Header.propTypes = {
  agglomerateFetch: PropTypes.func.isRequired,
  agglomerate: PropTypes.objectOf(Object).isRequired,
};

export const mapStateToProps = ({ agglomerate }) => ({
  agglomerate,
});

export const mapDispatchToProps = dispatch => ({
  agglomerateFetch: () => dispatch(agglomerateFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
