import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { agglomerateFetchData } from '../../actions/agglomerate';
import isEmpty from '../../utils/object';
import Conditional from '../Common/Conditional/Conditional';
import MaltemLogo from '../../assets/img/maltem-logo.png';
import './header.scss';

export class Header extends Component {
  componentDidMount() {
    const { agglomerateFetch } = this.props;
    agglomerateFetch();
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
    return (
      <nav className="header">
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
