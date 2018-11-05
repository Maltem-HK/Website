import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import SlideComponent from './Common/Slide/Slide';
import WelcomeComponent from './Welcome/Welcome';
import GeneralInformationComponent from './GeneralInformation/GeneralInformation';
import Team from './Team/Team';
import Conditional from './Common/Conditional/Conditional';
import { agglomerateFetchData } from '../actions/agglomerate';
import isEmpty from '../utils/object';

configureAnchors({ scrollDuration: 500 });

export class App extends Component {
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
    const {
      agglomerate: {
        welcomewords,
        socialnetworks,
        generalinformation,
        team,
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
        <Conditional test={this.loadSuccess('generalinformation')}>
          <SlideComponent className="slide-general-information">
            <ScrollableAnchor id="general-information">
              <div>
                <GeneralInformationComponent
                  generalinformation={generalinformation}
                />
              </div>
            </ScrollableAnchor>
          </SlideComponent>
        </Conditional>
        <Conditional test={this.loadSuccess('team')}>
          <SlideComponent className="slide-team">
            <Team
              team={team}
            />
          </SlideComponent>
        </Conditional>
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
