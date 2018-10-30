import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import SlideComponent from './Common/Slide';
import WelcomeComponent from './Welcome/Welcome';
import GeneralInformationComponent from './GeneralInformation/GeneralInformation';
import { agglomerateFetchData } from '../actions/agglomerate';
import isEmpty from '../utils/object';

configureAnchors({ scrollDuration: 500 });

export class App extends Component {
  componentDidMount() {
    const { agglomerateFetch } = this.props;
    agglomerateFetch();
  }

  render() {
    const {
      agglomerate: {
        welcomewords,
        socialnetworks,
        generalinformation,
      },
    } = this.props;

    return (
      <div id="app-content">
        <SlideComponent className="slide-welcome">
          <WelcomeComponent
            welcomeWords={welcomewords}
            socialNetworks={socialnetworks}
          />
        </SlideComponent>
        {!isEmpty(generalinformation)
          && (
            <SlideComponent className="slide-general-information">
              <ScrollableAnchor id="general-information">
                <div>
                  <GeneralInformationComponent
                    generalinformation={generalinformation}
                  />
                </div>
              </ScrollableAnchor>
            </SlideComponent>
          )
        }
      </div>
    );
  }
}

App.propTypes = {
  agglomerateFetch: PropTypes.func.isRequired,
  agglomerate: PropTypes.objectOf(Object).isRequired,
};

export const mapStateToProps = ({ agglomerate }) => ({
  agglomerate,
});

export const mapDispatchToProps = dispatch => ({
  agglomerateFetch: () => dispatch(agglomerateFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
